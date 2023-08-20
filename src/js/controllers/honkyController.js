"use strict";

import { lookForPlayersReactingToHonkyTonk, chooseRandomPlayer, updateCurrentPlayer } from "../model";
import { mistakesWereMade, humanOrMachine } from "./gameController";
import { hitOrMissHonkyTonk, hasAPlayerCommitedAMistake } from "../helpers";
import { humanResponseToHonkyTonk, humanReactionToBeingCalledAfterHoubaHouba } from "./buttonsController";
import playersView from "../views/playersView";

export let playersToHoubaHouba;

// This function will define the players that will have to react to the honky tonk
const WhoWillHoubaHouba = function (player, currentPlayers, gameDirection) {
  const indexOfCurrentPlayer = currentPlayers.indexOf(player);
  return lookForPlayersReactingToHonkyTonk(indexOfCurrentPlayer, currentPlayers, gameDirection);
};

// This function will check if the pouet has successfully been uttered by the player.
const pouetManagement = function (player) {
  // The player dot should be highlited
  playersView.highlightActivePlayer(player);
  // We differeentiate between the case where a human player should react and the case where a virtual player should react
  if (player.human) {
    console.log("Vous devez dire Pouet");
    humanReactionToBeingCalledAfterHoubaHouba();
  } else {
    // In the case of a virtual player : 2 cases :
    // 1°) The player reacts successfully
    // 2°) The player does not react successfully
    if (hasAPlayerCommitedAMistake(player, "reaction to honky tonk")) {
      console.log(`${player.name} a réussi à dire Pouet`);
      setTimeout(() => {
        humanOrMachine();
      }, 3000);
    } else {
      console.log(`${player.name} n'a pas réussi à dire Pouet`);
      console.log(`${player.name} est éliminé`);
      mistakesWereMade(player);
    }
  }
};

// This function will choose automatically a new player to start a new turn after honky tonk
export const relaunchGameAfterHoubaHouba = function (playerToCallANewPlayer) {
  console.log(`${playerToCallANewPlayer.name} doit désormais désigner quelqu'un pour devenir le nouveau joueur`);

  // A player is randomly selected
  const newPlayer = chooseRandomPlayer();
  console.log(`${playerToCallANewPlayer.name} a appelé ${newPlayer.name} après avoir dit Houba Houba`);
  // We then test if the new player has successfully reacted by saying "XXX"
  pouetManagement(newPlayer);
};

// The function takes over once the human player has clicked on the player that he wishes will continue to play
export const callPlayer = function (playerName) {
  // in the model, we set the new current  players
  const newPlayer = updateCurrentPlayer(playerName);
  console.log(newPlayer.name, "est le joueur qui a été choisi pour continuer le jeu");
  // We shall then check if the chosen player managed to say pouet
  pouetManagement(newPlayer);
};

// This function handles the process of the various reactions of players (virtual or human) to a honky tonk shot.
const reactionsToHonkyTonk = function (playersReactingToHonkyTonk) {
  //Case when one of the player involved is human
  if (playersReactingToHonkyTonk[0].human || playersReactingToHonkyTonk[1].human) {
    // We check that the virtual player has managed to do Houba Houba.
    humanResponseToHonkyTonk(hitOrMissHonkyTonk(playersReactingToHonkyTonk[1]));
  } else {
    // Case where none of the players who have to say houba houba are human

    // houba0 et houba1 are booleans that tell us if the player has successfully reacted to the honky tonk situation
    // the booleans are true if a mistake has been committed and false otherwise
    const houba0 = hitOrMissHonkyTonk(playersReactingToHonkyTonk[0]);
    const houba1 = hitOrMissHonkyTonk(playersReactingToHonkyTonk[1]);

    if (houba0 && houba1) {
      // If both players are mistaken, they are both eliminated
      mistakesWereMade(playersReactingToHonkyTonk[0]);
      mistakesWereMade(playersReactingToHonkyTonk[1]);
    } else if (!houba0 && !houba1) {
      // case where both players have successfully houba houba. We must then relauch the game by calling another player
      console.log(
        `${playersReactingToHonkyTonk[0].name} & ${playersReactingToHonkyTonk[1].name} ont tous les deux réussi à faire Houba Houba `
      );
      relaunchGameAfterHoubaHouba(playersReactingToHonkyTonk[1]);
    } else if (houba0 && !houba1) {
      // The second player has been succesful at houba houba but the first has not
      console.log(`${playersReactingToHonkyTonk[1].name} has achieved Houba Houba`);
      // Since a mistake has been committed, the elimination of the first player to houba houba is triggered

      mistakesWereMade(playersReactingToHonkyTonk[0]);
    } else if (!houba0 && houba1) {
      // The second player has committed a mistake and must be eliminated but the first player managed to do it
      mistakesWereMade(playersReactingToHonkyTonk[1]);
      // The first player has been succesful at houba houba
      console.log(`${playersReactingToHonkyTonk[0].name} has achieved Houba Houba`);
    }
  }
};

export const honkyTonkByVirtualPlayer = function (player, currentPlayers, gameDirection) {
  // First we want to understand who are the players who will have to react to the honky tonk shot
  playersToHoubaHouba = WhoWillHoubaHouba(player, currentPlayers, gameDirection);

  // Then we check if the virtual players involved managed to do Houba Houba
  reactionsToHonkyTonk(playersToHoubaHouba);
};
