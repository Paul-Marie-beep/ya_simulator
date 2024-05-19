"use strict";

import * as eventsdisplay from "./eventsDisplayController";

import { lookForPlayersReactingToVadeRetro, chooseRandomPlayer } from "../model";
import { hitOrMissHonkyTonk } from "../helpers";
import { dringManagement } from "./honkyController";
import { mistakesWereMade } from "./gameController";
import { humanResponseToVadeRetro, checkHumanDesignationOfANewPlayer } from "./buttonsController";

export let playersToSatanas;
export const sayings = ["Sa", "Ta", "Nas"];

const whoWillSatanas = function () {
  return lookForPlayersReactingToVadeRetro();
};

export const relaunchGameAfterVadeRetro = function (playerToCallANewPlayer) {
  console.log(`${playerToCallANewPlayer.name} doit désormais désigner quelqu'un pour devenir le nouveau joueur`);
  eventsdisplay.playerHavingToDesignateAnotherPlayerAnnouncement(playerToCallANewPlayer.name);

  // A player is randomly selected
  const newPlayer = chooseRandomPlayer();
  console.log(`${playerToCallANewPlayer.name} a appelé ${newPlayer.name} après avoir dit "Ta"`);
  eventsdisplay.chosenPlayerNameAnnoucement(playerToCallANewPlayer.name, newPlayer.name, "Ta");

  // We then test if the new player has successfully reacted by saying "Dring"
  dringManagement(newPlayer, "vade");
};

export const checkForSatanas = function (player = playersToSatanas[0], saying = sayings[0], i = 0) {
  // We shall check at each time if the player involved is human or not
  if (player.human) {
    humanResponseToVadeRetro(saying);
  } else {
    // The parameters of the hitOrMissHonkyTonk functions are booleans that tell us if the virtual player has successfully reacted to the honky tonk situation
    // the booleans are true if a mistake has been committed and false otherwise
    if (hitOrMissHonkyTonk(player, saying)) {
      console.log(`${player.name} n'a pas réussi à faire "${saying}"`);
      eventsdisplay.virtualPlayerMistakeWarning(player.name, saying);
      mistakesWereMade(player);
    } else {
      // Case where the player reacted successfully
      console.log(`${player.name} a réussi à faire "${saying}"`);
      eventsdisplay.virtualPlayerNoiseAnnouncement(player.name, saying);
      // No need to carry on testing the reactions if 3 people have reacted successfully. We shall then move on
      if (i >= 2) {
        // Two cases : The player who said ta is human or not
        if (playersToSatanas[1].human) {
          // We are now going to take advantage of the fact that we already coded the part where we designate a new player for the konky tonk shot and use it instead od coding something specific
          checkHumanDesignationOfANewPlayer("vade");
        } else {
          relaunchGameAfterVadeRetro(playersToSatanas[1]);
        }
      } else {
        checkForSatanas(playersToSatanas[i + 1], sayings[i + 1], i + 1);
      }
    }
  }
};

////////////////////////////////////////////////////////:///////////////////////////////////::

export const vadeRetroByVirtualPlayer = function () {
  // First we want to understand who are the players who will have to react to the vade retro shot
  playersToSatanas = whoWillSatanas();
  console.log("👁️ Voici les joueurs qui vont devoir faire Sa Ta Nas :", playersToSatanas);
  eventsdisplay.serviceMessage(
    `👁️ Voici les joueurs qui vont devoir dire Sa, Ta et Nas : ${playersToSatanas[0].name}, ${playersToSatanas[1].name}, ${playersToSatanas[2].name}`
  );

  // Then we check if the virtual players involved managed to do Sa/Ta/Nas
  checkForSatanas();
};
