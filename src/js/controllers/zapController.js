"use strict";

import * as eventsDisplay from "./eventsDisplayController";
import {
  chooseRandomPlayer,
  currentPlayer,
  currentPlayers,
  endOfZap,
  playerInitiatingAZap,
  updateCurrentPlayer,
  updateListOfZappedPlayers,
} from "../model";
import { humanOrMachine, mistakesWereMade, virtualPlayerChoice } from "./gameController";
import { hasAPlayerCommitedAMistake, randomInt } from "../helpers";
import playersView from "../views/playersView";
import { humanResponseToZap } from "./buttonsController";

// We want to be able to monitor if all players have been zapped. Hence a counter.
let zapCounter = 0;

// Function to erase the parameters in the model once the zap sequence is finished
export const eraseZapConditions = function () {
  // reset the zap counter
  zapCounter = 0;
  endOfZap();
};

export const carryOnZapProcess = function (playerZapped) {
  playersView.highlightActivePlayer(playerZapped);
  updateListOfZappedPlayers(playerZapped);
  zapCounter++;
  console.log("zapCounter :", zapCounter);
  updateCurrentPlayer(playerZapped.name);
};

// The player which has just been zapped shall decide whether he wants to zap or not
export const toZapOrNotToZap = function (playerZapped) {
  // We shall state that the player that's been zapped is now the current player
  console.log("🐭🐭Test currentPlayer🐭🐭", currentPlayer);
  const rand = randomInt(0, 100);
  if (rand <= 90) {
    // Case where a player elected to zap another player

    zapByVirtualPlayer(playerZapped);
  } else {
    // Case where a player chose to start another round without zapping
    console.log(`${playerZapped.name} dit 'Je prends'`);
    eventsDisplay.virtualPlayerShotAnnouncement(playerZapped.name, "Je prends");

    // We shall unzap all players.
    eraseZapConditions();
    // There is a real chance that the player electing not to zap will commit a mistake !!
    if (hasAPlayerCommitedAMistake(playerZapped, "take")) {
      console.log(`${playerZapped.name} n'a pas réussi à dire 'Je prends'`);
      eventsDisplay.virtualPlayerMistakeWarning(playerZapped.name, "Je prends");
      console.log(`${playerZapped.name} est éliminé`);
      mistakesWereMade(playerZapped);
    } else {
      // Case where no mistake has been committed
      // The second parameter is to make it impossible for a player to zap after having said 'Je prends'
      virtualPlayerChoice(playerZapped, false);
    }
  }
};

const lastZap = function (player, playerZapped) {
  if (playerZapped.numero === playerInitiatingAZap.numero) {
    // Case where the player manages to zap the first player ta have zapped
    console.log(`${player.name} a réussi à zapper le premier joueur à avoir zappé : ${playerInitiatingAZap.name}`);
    console.log(`C'est donc à ${playerInitiatingAZap.name} de reprendre le jeu`);
    eventsDisplay.lastZapOkAnnouncement(player.name, playerInitiatingAZap.name);
    // Back to a normal round
    updateCurrentPlayer(playerZapped.name);
    -humanOrMachine();
  } else {
    // Case where the player fails to zap the first player to have zapped
    console.log(
      `${player.name} n'a pas réussi à zapper le premier joueur à avoir zappé : ${playerInitiatingAZap.name} puisqu'il a zappé ${playerZapped.name}`
    );
    eventsDisplay.lastZapFailAnnouncement(player.name, playerInitiatingAZap.name, playerZapped.name);
    console.log(`${player.name} est donc éliminé`);
    mistakesWereMade(player);
  }
  // We shall erase  all zap parameters.
  eraseZapConditions();
};

const humanZap = function (playerZapped) {
  console.log("playerZapped humanZap:", playerZapped);
  carryOnZapProcess(playerZapped);
  setTimeout(() => {
    humanResponseToZap();
  }, 2000);
};

export const zapByVirtualPlayer = function (player) {
  // The presence of a parameter allows us to make sure that a player will not zap him or herself
  // chooseRandomPlayer updates the current player in the model
  const playerZapped = chooseRandomPlayer(player);

  // Guard function to handle the situation where everyone has previously been zapped the last zap situation;
  if (zapCounter === currentPlayers.length - 1) {
    console.log("Tous les joueurs ont été zappés !!!");
    eventsDisplay.serviceMessage("🙉 Tous les joueurs ont été zappés !!!");
    lastZap(player, playerZapped);
    return;
  }
  console.log("🐹🐹 player zapping 🐹🐹 :", player.name, "🐹🐹 player zapped 🐹🐹 :", playerZapped.name);
  eventsDisplay.zapAnnouncement(player.name, playerZapped.name);
  // Guard function to handle a situation in which someone who had previously been zapped is zapped again
  if (playerZapped.zapped) {
    console.log(`${playerZapped.name} a été zappé par ${player.name} alors qu'il avait déjà été zappé`);
    eventsDisplay.zapFailAnnouncement(playerZapped.name, player.name);
    console.log(`${player.name} est donc éliminé`);
    // We shall erase  all zap parameters.
    eraseZapConditions();
    mistakesWereMade(player);
    return;
  }
  // case where the zapped player is human
  if (playerZapped.human) {
    humanZap(playerZapped);
    return;
  }
  carryOnZapProcess(playerZapped);
  setTimeout(() => {
    toZapOrNotToZap(playerZapped);
  }, 2000);
};
