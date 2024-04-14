"use strict";

import { lookForPlayersReactingToVadeRetro, chooseRandomPlayer } from "../model";
import { hitOrMissHonkyTonk } from "../helpers";
import { dringManagement } from "./honkyController";
import { mistakesWereMade } from "./gameController";
import { humanResponseToVadeRetro } from "./buttonsController";

export let playersToSatanas;
let humanIndex;
export const sayings = ["sa", "ta", "nas"];

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

export const checkForSatanas = function (player = playersToSatanas[0], saying = sayings[0], i = 0) {
  // We shall check at each time if the player involved is human or not
  if (player.human) {
    // humanIndex = i;
    humanResponseToVadeRetro(saying);
  } else {
    // The parameters of the hitOrMissHonkyTonk functions are booleans that tell us if the virtual player has successfully reacted to the honky tonk situation
    // the booleans are true if a mistake has been committed and false otherwise
    if (hitOrMissHonkyTonk(player, saying)) {
      console.log(`${playersToSatanas[i].name} n'a pas réussi à faire "${sayings[i]}"`);
      mistakesWereMade(player);
    } else {
      console.log(`${playersToSatanas[i].name} a réussi à faire "${sayings[i]}"`);
      // No need to carry on testing the reactions if 3 people have reacted successfully. We shall then move on
      if (i >= 2) {
        relaunchGameAfterVadeRetro(playersToSatanas[1]);
      } else {
        checkForSatanas(playersToSatanas[i + 1], saying[i + 1], i + 1);
      }
    }
  }
};

////////////////////////////////////////////////////////:///////////////////////////////////::

export const vadeRetroByVirtualPlayer = function () {
  // First we want to understand who are the players who will have to react to the vade retro shot
  playersToSatanas = whoWillSatanas();
  console.log("👁️ Voici les joueurs qui vont devoir faire Sa Ta Nas :", playersToSatanas);

  // Then we check if the virtual players involved managed to do Sa/Ta/Nas
  checkForSatanas();
};
