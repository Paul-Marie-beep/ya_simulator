"use strict";

import * as eventsDisplay from "./eventsDisplayController";

import { lookForPlayersReactingToHonkyTonk, chooseRandomPlayer, updateCurrentPlayer } from "../model";
import { mistakesWereMade, humanOrMachine } from "./gameController";
import { hitOrMissHonkyTonk, hasAPlayerCommitedAMistake } from "../helpers";
import { humanResponseToHonkyTonk, humanReactionToBeingCalledAfterHoubaHouba } from "./buttonsController";
import playersView from "../views/playersView";
import buttonsView from "../views/buttonsView";
import { TIMEOUT } from "../config";

// This function will define the players that will have to react to the honky tonk
const WhoWillHoubaHouba = function () {
  return lookForPlayersReactingToHonkyTonk();
};

const defineNoise = function (shot) {
  if (shot === "honky") {
    return "Dring";
  } else if (shot === "vade") {
    return "Je brûle.";
  }
};

// This function will check if the dring has successfully been uttered by the player.
export const dringManagement = function (player, shot) {
  // We must define what the player will have to say depending on the shot currently being played
  const noise = defineNoise(shot);

  // The player dot should be highlighted
  playersView.highlightActivePlayer(player);
  // We differentiate between the case where a human player should react and the case where a virtual player should react
  if (player.human) {
    console.log(`Vous devez dire "${noise}"`);
    setTimeout(() => humanReactionToBeingCalledAfterHoubaHouba(noise), TIMEOUT);
  } else {
    // In the case of a virtual player : 2 cases :
    // 1°) The player reacts successfully
    // 2°) The player does not react successfully
    if (!hasAPlayerCommitedAMistake(player, "reaction to honky tonk")) {
      console.log(`${player.name} a réussi à dire ${noise}`);
      // we shall let the human player know what's happening
      eventsDisplay.virtualPlayerShotAnnouncement(player.name, noise);
      setTimeout(() => {
        humanOrMachine();
      }, TIMEOUT);
    } else {
      console.log(`${player.name} n'a pas réussi à dire ${noise}`);
      eventsDisplay.virtualPlayerMistakeWarning(player.name, noise);
      console.log(`😡😡😡${player.name} est éliminé😡😡😡`);
      mistakesWereMade(player);
    }
  }
};

// This function will choose automatically a new player to start a new turn after honky tonk
export const relaunchGameAfterHoubaHouba = function (playerToCallANewPlayer) {
  console.log(`${playerToCallANewPlayer.name} doit désormais désigner quelqu'un pour devenir le nouveau joueur`);
  eventsDisplay.playerHavingToDesignateAnotherPlayerAnnouncement(playerToCallANewPlayer.name);

  // A player is randomly selected
  const newPlayer = chooseRandomPlayer();
  console.log(`${playerToCallANewPlayer.name} a appelé ${newPlayer.name} après avoir dit Houba Houba`);
  eventsDisplay.chosenPlayerNameAnnoucement(playerToCallANewPlayer.name, newPlayer.name, "Houba Houba");
  // We then test if the new player has successfully reacted by saying "Dring"
  setTimeout(() => dringManagement(newPlayer, "honky"), TIMEOUT);
};

// The function takes over once the human player has clicked on the player that he wishes will continue to play
export const callPlayer = function (playerName, shot) {
  // We erase the order that was shown to players
  buttonsView.clearCommands();
  // in the model, we set the new current  players
  const newPlayer = updateCurrentPlayer(playerName);
  console.log(newPlayer.name, "est le joueur qui a été choisi pour continuer le jeu");
  // We shall then check if the chosen player managed to say dring (or 'je brûle' in case of vade retro)
  dringManagement(newPlayer, shot);
};

// This function handles the process of the various reactions of players (virtual or human) to a honky tonk shot.
const reactionsToHonkyTonk = function (playersReactingToHonkyTonk) {
  //Case when one of the player involved is human
  if (playersReactingToHonkyTonk[0].human || playersReactingToHonkyTonk[1].human) {
    // We check that the virtual player has managed to do Houba Houba.
    // hitOrMissHonkyTonk will return a boolean telling us if the virtual player has managed to houba houba.
    setTimeout(() => {
      humanResponseToHonkyTonk(
        hitOrMissHonkyTonk(
          playersReactingToHonkyTonk.find((player) => player.human === false),
          "Houba Houba"
        ),
        playersReactingToHonkyTonk
      );
    }, TIMEOUT);
  } else {
    // Case where none of the players who have to say houba houba are human

    // houba0 et houba1 are booleans that tell us if the virtual player has successfully reacted to the honky tonk situation
    // the booleans are true if a mistake has been committed and false otherwise
    const houba0 = hitOrMissHonkyTonk(playersReactingToHonkyTonk[0], "Houba Houba");
    const houba1 = hitOrMissHonkyTonk(playersReactingToHonkyTonk[1], "Houba Houba");

    if (houba0 && houba1) {
      // If both players are mistaken, they are both eliminated
      setTimeout(() => {
        mistakesWereMade(playersReactingToHonkyTonk[0]);
        mistakesWereMade(playersReactingToHonkyTonk[1]);
        eventsDisplay.virtualPlayerMistakeWarning(playersReactingToHonkyTonk[0].name, "Houba Houba");
        eventsDisplay.virtualPlayerMistakeWarning(playersReactingToHonkyTonk[1].name, "Houba Houba");
      }, TIMEOUT - 1500);
    } else if (!houba0 && !houba1) {
      // case where both players have successfully houba houba. We must then relauch the game by calling another player
      setTimeout(() => {
        console.log(
          `${playersReactingToHonkyTonk[0].name} & ${playersReactingToHonkyTonk[1].name} ont tous les deux réussi à faire Houba Houba `
        );
        eventsDisplay.virtualPlayerNoiseAnnouncement(playersReactingToHonkyTonk[0].name, "Houba Houba");
        eventsDisplay.virtualPlayerNoiseAnnouncement(playersReactingToHonkyTonk[1].name, "Houba Houba");
        relaunchGameAfterHoubaHouba(playersReactingToHonkyTonk[1]);
      }, TIMEOUT - 1500);
    } else if (houba0 && !houba1) {
      // The second player has been succesful at houba houba but the first has not
      setTimeout(() => {
        console.log(`${playersReactingToHonkyTonk[1].name} has achieved Houba Houba`);
        eventsDisplay.virtualPlayerMistakeWarning(playersReactingToHonkyTonk[0].name, "Houba Houba");
        eventsDisplay.virtualPlayerNoiseAnnouncement(playersReactingToHonkyTonk[1].name, "Houba Houba");
        // Since a mistake has been committed, the elimination of the first player to houba houba is triggered

        mistakesWereMade(playersReactingToHonkyTonk[0]);
      }, TIMEOUT - 1500);
    } else if (!houba0 && houba1) {
      // The second player has committed a mistake and must be eliminated but the first player managed to do it
      setTimeout(() => {
        console.log(`${playersReactingToHonkyTonk[0].name} has achieved Houba Houba`);
        eventsDisplay.virtualPlayerNoiseAnnouncement(playersReactingToHonkyTonk[0].name, "Houba Houba");
        eventsDisplay.virtualPlayerMistakeWarning(playersReactingToHonkyTonk[1].name, "Houba Houba");
        mistakesWereMade(playersReactingToHonkyTonk[1]);
      }, TIMEOUT - 1000);
    }
  }
};

export const honkyTonkByVirtualPlayer = function () {
  // First we want to understand who are the players who will have to react to the honky tonk shot
  const playersToHoubaHouba = WhoWillHoubaHouba();

  // Then we check if the virtual players involved managed to do Houba Houba
  reactionsToHonkyTonk(playersToHoubaHouba);
};
