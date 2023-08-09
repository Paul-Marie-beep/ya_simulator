"use strict";

import { lookForPlayersReactingToHonkyTonk, chooseRandomPlayer } from "../model";
import { mistakesWereMade, humanOrMachine } from "./gameController";
import { hitOrMissHonkyTonk, hasAPlayerCommitedAMistake } from "../helpers";

// This function will define the players that will have to react to the honky tonk
const WhoWillHoubaHouba = function (player, currentPlayers, gameDirection) {
  const indexOfCurrentPlayer = currentPlayers.indexOf(player);
  const transit = lookForPlayersReactingToHonkyTonk(indexOfCurrentPlayer, currentPlayers, gameDirection);
  return transit;
};

const relaunchGameAfterHoubaHouba = function (playerToCallANewPlayer) {
  console.log(`${playerToCallANewPlayer.name} doit désormais désigner quelqu'un pour devenir le nouveau joueur`);
  // La guard a plutôt sa place dans la fonction qui appelle relaunchGameAfterHoubaHouba qu'ici je pense.
  if (playerToCallANewPlayer.human) {
    console.log("The human player should name a player to continue the game");
    return;
    //buttonsView.showCallNewPlayerCommands();
    //playersView.handleHumanChoiceOfANewPlayer(checkHumanResponsesToRelaunchAfterHoubaHouba);
  } else {
    // A player is randomly selected
    const newPlayer = chooseRandomPlayer();
    console.log(`${playerToCallANewPlayer.name} a appelé ${newPlayer.name} après avoir dit Houba Houba`);
    // We then test if the new player has successfully reacted by saying "XXX"
    if (hasAPlayerCommitedAMistake(newPlayer, "reaction to honky tonk")) {
      console.log(`${newPlayer.name} n'a pas réussi à dire XXX`);
      mistakesWereMade(newPlayer);
    } else {
      console.log(`${newPlayer.name} a réussi à dire XXX`);
      humanOrMachine();
    }
  }
};

const reactionsToHonkyTonk = function (playersReactingToHonkyTonk) {
  //Guard if one of the player involved is human
  if (playersReactingToHonkyTonk[0].human || playersReactingToHonkyTonk[1].human) {
    console.log("Il y a un joueur humain impliqué dans le honky Tonk => on arrête tout");
    return;
  }

  // We then check if one or both players have commited a mistake

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
};

export const honkyTonkByVirtualPlayer = function (player, currentPlayers, gameDirection) {
  // First we want to understand who are the players who will have to react to the honky tonk shot
  const playersToHoubaHouba = WhoWillHoubaHouba(player, currentPlayers, gameDirection);

  // Then we check if the virtual players involved managed to do Houba Houba
  reactionsToHonkyTonk(playersToHoubaHouba);
};
