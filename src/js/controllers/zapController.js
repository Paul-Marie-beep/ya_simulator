"use strict";

import {
  chooseRandomPlayer,
  currentPlayer,
  currentPlayers,
  endOfZap,
  playerInitiatingAZap,
  unzapAllPlayers,
  updateCurrentPlayer,
  updateListOfZappedPlayers,
} from "../model";
import { mistakesWereMade, virtualPlayerChoice } from "./gameController";
import { hasAPlayerCommitedAMistake, randomInt } from "../helpers";
import playersView from "../views/playersView";

// We want to be able to monitor if all players have been zapped. Hence a counter.
let zapCounter = 1;

// Function to erase the parameters in the model once the zap sequence is finished
const eraseZapConditions = function () {
  // reset the zap counter
  zapCounter = 1;
  endOfZap();
};

// The player which has just been zapped shall decide whether he wants to zap or not
const toZapOrNotToZap = function (playerZapped) {
  // We shall state that the player that's been zapped is now the current player
  updateCurrentPlayer(playerZapped.name);
  console.log("🐭🐭Test currentPlayer🐭🐭", currentPlayer);
  const rand = randomInt(0, 100);
  if (rand <= 90) {
    // Case where a player elected to zap another player
    setTimeout(() => {
      playersView.highlightActivePlayer(playerZapped);
      zapCounter++;
      console.log("zapCounter :", zapCounter);
      zapByVirtualPlayer(playerZapped);
    }, 2000);
  } else {
    setTimeout(() => {
      // Case where a player chose to start another round without zapping
      console.log(`${playerZapped.name} dit 'Je prends'`);
      // We shall unzap all players.
      eraseZapConditions();
      // There is a real chance that the player electing not to zap will commit a mistake !!
      if (hasAPlayerCommitedAMistake(playerZapped, "take")) {
        console.log(`${playerZapped.name} n'a pas réussi à dire 'Je prends'`);
        console.log(`${playerZapped.name} est éliminé`);
        mistakesWereMade(playerZapped);
      } else {
        // Case where no mistake has been committed
        // The second parameter is to make it impossible for a player to zap after having said 'Je prends'
        virtualPlayerChoice(playerZapped, false);
      }
    }, 2000);
  }
};

const lastZap = function (player, playerZapped) {
  if (playerZapped.name === playerInitiatingAZap.name) {
    // Case where the player manages to zap the first player ta have zapped
    console.log(`${player.name} a réussi à zapper le premier joueur à avoir zappé : ${playerInitiatingAZap.name}`);
    console.log(`C'est donc à ${playerInitiatingAZap.name} de reprendre le jeu`);
    // Back to a normal round
    updateCurrentPlayer(playerZapped.name);
    virtualPlayerChoice(playerZapped);
  } else {
    // Case where the player fails to zap the first player ta have zapped
    console.log(
      `${player.name} n'a pas réussi à zapper le premier joueur à avoir zappé : ${playerInitiatingAZap.name} puisqu'il a zappé ${playerZapped.name}`
    );
    console.log(`${player.name} est donc éliminé`);
    mistakesWereMade(player);
  }
  // We shall erase  all zap parameters.
  eraseZapConditions();
};

export const zapByVirtualPlayer = function (player) {
  // The presence of a parameter allows us to make sure that a player will not zap him or herself
  const playerZapped = chooseRandomPlayer(player);

  // Guard function to handle the situation where everyone has previously been zapped the last zap situation;
  if (zapCounter === currentPlayers.length - 1) {
    console.log("Tous les joueurs ont été zappés !!!");
    lastZap(player, playerZapped);
    return;
  }
  console.log("🐹🐹 player zapped 🐹🐹 :", playerZapped.name);
  if (playerZapped.zapped) {
    console.log(`${playerZapped.name} a été zappé par ${player.name} alors qu'il avait déjà été zappé`);
    console.log(`${player.name} est donc éliminé`);
    // We shall erase  all zap parameters.
    eraseZapConditions();
    mistakesWereMade(player);
    return;
  }
  // Guard if the zapped player is human
  if (playerZapped.human) return;
  updateListOfZappedPlayers(playerZapped);
  toZapOrNotToZap(playerZapped);
};
