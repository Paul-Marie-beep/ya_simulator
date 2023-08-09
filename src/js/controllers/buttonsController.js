"use strict";

import * as model from "../model.js";
import buttonsView from "../views/buttonsView";

import { humanOrMachine } from "./gameController.js";

const checkHumanResponsesToShot = function (keyPressed) {
  // We start by  erasing the commands shown to the human player
  buttonsView.clearCommands();
  // This function waits for the key that the player has pressed to check if he has lost or if the game can continue;
  if (keyPressed === "h") {
    // The player has chosen to play a hold down => the game direction is changing
    console.log("le joueur fait un hold down");
    model.changeDirectionAfterHoldDown();
    model.changePlayer(model.currentPlayer);
    humanOrMachine();
    return;
  }
  if (keyPressed === model.gameDirection) {
    // The player has chosen the right direction for his ya
    console.log("Le joueur a fait un ya dans le bon sens");
    model.changePlayer(model.currentPlayer);
    humanOrMachine();
    return;
  } else {
    //The player has lost the game
    console.log("C'est la lose !!! 😵‍💫");
    return;
  }
};

export const handleHumanTurnToPlay = function () {
  buttonsView.showShotsCommands();
  buttonsView.handlePlayerResponseToShot(checkHumanResponsesToShot);
};
