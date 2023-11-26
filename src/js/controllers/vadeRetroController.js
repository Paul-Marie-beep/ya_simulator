"use strict";

import { lookForPlayersReactingToVadeRetro, chooseRandomPlayer } from "../model";
import { hitOrMissHonkyTonk } from "../helpers";
import { dringManagement } from "./honkyController";
import { mistakesWereMade } from "./gameController";
import { humanResponseToVadeRetro } from "./buttonsController";

export let playersToSatanas;

const whoWillSatanas = function () {
  return lookForPlayersReactingToVadeRetro();
};

export const relaunchGameAfterVadeRetro = function (playerToCallANewPlayer) {
  console.log(`${playerToCallANewPlayer.name} doit désormais désigner quelqu'un pour devenir le nouveau joueur`);

  // A player is randomly selected
  const newPlayer = chooseRandomPlayer();
  console.log(`${playerToCallANewPlayer.name} a appelé ${newPlayer.name} après avoir dit "Ta"`);

  // We then test if the new player has successfully reacted by saying "Dring"
  dringManagement(newPlayer, "Je brûle");
};

const reactionsToVadeRetro = function (playersReactingToVadeRetro) {
  //Case when one of the player involved is human
  if (
    playersReactingToVadeRetro[0].human ||
    playersReactingToVadeRetro[1].human ||
    playersReactingToVadeRetro[2].human
  ) {
    const virtualPlayersReactingToVadeRetro = playersReactingToVadeRetro.filter((player) => player.human === false);
    const hasAnyVirtualPlayerFailedToSatanas = false;
    if (
      hitOrMissHonkyTonk(virtualPlayersReactingToVadeRetro[0], "Houba Houba") ||
      hitOrMissHonkyTonk(virtualPlayersReactingToVadeRetro[1], "Houba Houba")
    ) {
      hasAnyVirtualPlayerFailedToSatanas = true;
    }
    console.log("Attention, on a un humain dans l'histoire qui doit réagit à Vade Retro");
    humanResponseToVadeRetro(hasAnyVirtualPlayerFailedToSatanas);
  } else {
    // Case where none of the players who have to say sa, ta or nas are human

    // The parameters of the hitOrMissHonkyTonk functions are booleans that tell us if the virtual player has successfully reacted to the honky tonk situation
    // the booleans are true if a mistake has been committed and false otherwise
    if (!hitOrMissHonkyTonk(playersReactingToVadeRetro[0], "Sa")) {
      if (!hitOrMissHonkyTonk(playersReactingToVadeRetro[1], "Ta")) {
        if (!hitOrMissHonkyTonk(playersReactingToVadeRetro[2], "Nas")) {
          // If the three players said what they had to say successfully, we shall then relaunch the game
          console.log(
            `${playersReactingToVadeRetro[0].name} a réussi a faire "Sa", ${playersReactingToVadeRetro[1].name} a réussi a faire "Ta" et ${playersReactingToVadeRetro[2].name} a réussi a faire "Nas"`
          );
          relaunchGameAfterVadeRetro(playersReactingToVadeRetro[1]);
        } else {
          // If the player who has to say Nas cannot do it, he must leave the game
          console.log(`${playersReactingToVadeRetro[2].name} n'a pas réussi à dire "Nas". `);
          mistakesWereMade(playersReactingToVadeRetro[2]);
        }
      } else {
        // If the player who has to say Ta cannot do it, he must leave the game
        console.log(`${playersReactingToVadeRetro[1].name} n'a pas réussi à dire "Ta". `);
        mistakesWereMade(playersReactingToVadeRetro[1]);
      }
    } else {
      // If the player who has to say sa cannot do it, he must leave the game
      console.log(`${playersReactingToVadeRetro[0].name} n'a pas réussi à dire "Sa".`);
      mistakesWereMade(playersReactingToVadeRetro[0]);
    }
  } ///////////////////////////////////////////////////////////:///////////////////////////////////::
};

export const vadeRetroByVirtualPlayer = function () {
  // First we want to understand who are the players who will have to react to the vade retro shot
  playersToSatanas = whoWillSatanas();
  console.log("👁️ Voici les joueurs qui vont devoir faire Sa Ta Nas :", playersToSatanas);

  // Then we check if the virtual players involved managed to do Houba Houba
  reactionsToVadeRetro(playersToSatanas);
};
