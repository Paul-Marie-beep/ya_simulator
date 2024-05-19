"use strict";

import * as eventsDisplay from "./eventsDisplayController";

import { chooseRandomPlayer } from "../model";
import { hasAPlayerCommitedAMistake, randomInt } from "../helpers";
import { virtualPlayerChoice, mistakesWereMade } from "./gameController";
import { humanReactionToLet, hasTheHumanPlayerTriedToTake } from "./buttonsController";
import buttonsView from "../views/buttonsView";

export const letByVirtualPlayer = function (player) {
  // We set a limit time (between 1 and 4 secondes) for a virtual player to say someting before the human player
  const reactionTime = randomInt(1, 4) * 1000;

  // We give the human player the opportunity to take
  humanReactionToLet(reactionTime);

  setTimeout(() => {
    // Guard to prevent a virtual player from getting involved if the human player has already taken
    if (hasTheHumanPlayerTriedToTake) return;

    // If a virtual player has chosen to take, we need to clear the commands shown to the player
    buttonsView.clearCommands();

    // Let us notice that chooseRandomPlayer changes the current player in the model
    const newPlayer = chooseRandomPlayer(player);

    console.log(`${newPlayer.name} a décidé de prendre`);
    eventsDisplay.virtualPlayerShotAnnouncement(newPlayer.name, "Je prends");

    // TEST POUR SAVOIR SI NEW PLAYER A REUSSI dire je prends
    if (hasAPlayerCommitedAMistake(newPlayer, "take")) {
      console.log(` 😡😡😡 ${newPlayer.name} n'a pas réussi à dire "Je prends" et est éliminé`);
      eventsDisplay.virtualPlayerMistakeWarning(newPlayer.name, "Je prends");
      mistakesWereMade();
    }

    setTimeout(() => {
      virtualPlayerChoice(newPlayer);
    }, 1000);
  }, reactionTime);
};
