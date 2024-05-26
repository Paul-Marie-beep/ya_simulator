"use strict";

import * as eventsDisplay from "./eventsDisplayController";

import { chooseAPlayerThatIsNotHuman } from "../model";
import { hasAPlayerCommitedAMistake } from "../helpers";
import { virtualPlayerChoice, mistakesWereMade } from "./gameController";
import buttonsView from "../views/buttonsView";

export const letByVirtualPlayer = function () {
  // If a virtual player has chosen to take, we need to clear the commands shown to the player
  buttonsView.clearCommands();

  // Let us notice that chooseRandomPlayer changes the current player in the model
  const newPlayer = chooseAPlayerThatIsNotHuman();

  console.log(`${newPlayer.name} a décidé de prendre`);
  eventsDisplay.virtualPlayerShotAnnouncement(newPlayer.name, "Je prends");

  // TEST POUR SAVOIR SI NEW PLAYER A REUSSI dire je prends
  if (hasAPlayerCommitedAMistake(newPlayer, "take")) {
    console.log(` 😡😡😡 ${newPlayer.name} n'a pas réussi à dire "Je prends" et est éliminé`);
    eventsDisplay.virtualPlayerMistakeWarning(newPlayer.name, "Je prends");
    mistakesWereMade();
    return;
  }

  setTimeout(() => {
    virtualPlayerChoice(newPlayer);
  }, 1000);
};
