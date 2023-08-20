"use strict";

import * as model from "../model.js";
import buttonsView from "../views/buttonsView.js";
import playersView from "../views/playersView.js";

import { virtualPlayerChoice } from "./gameController.js";
import { callPlayer, playersToHoubaHouba, relaunchGameAfterHoubaHouba } from "./honkyController.js";

let virtualHouba;

const checkHumanResponsesToShot = function (keyPressed) {
  // We start by  erasing the commands shown to the human player
  buttonsView.clearCommands();
  // This function waits for the key that the player has pressed to check if he has lost or if the game can continue;
  if (keyPressed === "h") {
    // The player has chosen to play a hold down => the game direction is changing
    console.log("le joueur fait un hold down");
    model.changeDirectionAfterHoldDown();
    model.changePlayer(model.currentPlayer);
    virtualPlayerChoice();
    return;
  }
  if (keyPressed === model.gameDirection) {
    // The player has chosen the right direction for his ya
    console.log("Le joueur a fait un ya dans le bon sens");
    model.changePlayer(model.currentPlayer);
    virtualPlayerChoice();
    return;
  } else {
    //The player has lost the game
    console.log("C'est la lose !!! 😵‍💫");
    return;
  }
};

export const handleHumanTurnToPlay = function () {
  playersView.highlightActivePlayer(model.currentPlayer);
  buttonsView.showShotsCommands();
  buttonsView.handlePlayerResponseToShot(checkHumanResponsesToShot);
};

// This function checks that Houba Houba has been done successfully
const checkHumanResponsesToHonkyTonk = function (keyPressed) {
  // We start by  erasing the commands shown to the human player
  buttonsView.clearCommands();

  // First case, the player reacts successfully
  if (keyPressed === "b") {
    console.log("le joueur a bien fait Houba Houba");
    // If both player  managed to Houba Houba
    if (!virtualHouba) {
      console.log(
        `${playersToHoubaHouba[0].name} & ${playersToHoubaHouba[1].name} ont tous les deux réussi à faire houba houba}`
      );
      // If both players are succesful at houba houba then the second player shall choose a new player to continue the game
      if (playersToHoubaHouba[1].human) {
        checkHumanDesignationOfANewPlayer();
      } else {
        relaunchGameAfterHoubaHouba(playersToHoubaHouba[1]);
      }
    } else if (virtualHouba) {
      // If the virtual player fails to Houba Houba
      console.log(`${playersToHoubaHouba[1].name} has failed to Houba Houba`);
      console.log(`${playersToHoubaHouba[1].name} must go !!`);
      mistakesWereMade(playersToHoubaHouba[1]);
      return;
    }
    // 2nd case, the player doesn't
  } else {
    console.log("Le joueur a mal fait Houba Houba");
    console.log("C'est la lose !!! 😵‍💫");
  }
};

// This function allow the player to do Houba Houba via the graphic interface
export const humanResponseToHonkyTonk = function (houba) {
  virtualHouba = houba;
  buttonsView.showHonkyTonkCommands();
  buttonsView.handlePlayerResponseToHonkyTonk(checkHumanResponsesToHonkyTonk);
};

export const checkHumanDesignationOfANewPlayer = function () {
  buttonsView.showCallNewPlayerCommands();
  playersView.handleHumanChoiceOfANewPlayer(callPlayer);
};

export const checkReactionToBeingCalled = function (boolean) {
  buttonsView.clearCommands();
  if (boolean) {
    handleHumanTurnToPlay();
  } else {
    console.log("Le joueur a mal dit 'Pouet'");
    console.log("C'est la lose !!! 😵‍💫");
  }
};

export const humanReactionToBeingCalledAfterHoubaHouba = function () {
  buttonsView.ShowNameCalledCommands();
  buttonsView.handlePlayerResponseToCall(checkReactionToBeingCalled);
};
