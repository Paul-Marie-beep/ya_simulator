"use strict";

import * as model from "../model.js";
import buttonsView from "../views/buttonsView.js";
import playersView from "../views/playersView.js";

import { virtualPlayerChoice, mistakesWereMade } from "./gameController.js";
import {
  callPlayer,
  playersToHoubaHouba,
  relaunchGameAfterHoubaHouba,
  honkyTonkByVirtualPlayer,
} from "./honkyController.js";
import {
  playersToSatanas,
  relaunchGameAfterVadeRetro,
  checkForSatanas,
  sayings,
  vadeRetroByVirtualPlayer,
} from "./vadeRetroController.js";
import { letByVirtualPlayer } from "./letController.js";
import { carryOnZapProcess, toZapOrNotToZap } from "./zapController.js";

let virtualHouba;
export let hasTheHumanPlayerTriedToTake;

// Function to check that the player has made a ya in the right direction
const checkDirection = function (direction) {
  if (direction === model.gameDirection) {
    // The player has chosen the right direction for his ya
    console.log("Le joueur a fait un ya dans le bon sens");
    model.changePlayer(model.currentPlayer);
    setTimeout(() => {
      virtualPlayerChoice(model.currentPlayer);
    }, 2000);
  } else {
    //The player has lost the game
    console.log("C'est la lose !!! 😵‍💫");
  }
};

const checkHumanResponsesToShot = function (keyPressed, type) {
  // We start by  erasing the commands shown to the human player
  buttonsView.clearCommands();
  // Two cases, a shot chosen via a key that is pressed or the name of a player to be zapped that is chosen by clicking on a name.
  if (type === "key") {
    // This function waits for the key that the player has pressed to check if he has lost or if the game can continue;
    if (keyPressed === "h") {
      // The player has chosen to play a hold down => the game direction is changing
      console.log("le joueur fait un hold down");
      model.changeDirectionAfterHoldDown();
      model.changePlayer(model.currentPlayer);
      setTimeout(() => {
        virtualPlayerChoice(model.currentPlayer);
      }, 2000);
    } else if (keyPressed === "ArrowLeft") {
      const dir = "left";
      checkDirection(dir);
    } else if (keyPressed === "ArrowRight") {
      const dir = "right";
      checkDirection(dir);
    } else if (keyPressed === "o") {
      console.log("le joueur a fait un honky tonk");
      setTimeout(() => {
        honkyTonkByVirtualPlayer();
      }, 2000);
    } else if (keyPressed === "a") {
      console.log("le joueur a fait un ahi");
      model.changePlayer(model.currentPlayer, 2);
      setTimeout(() => {
        virtualPlayerChoice(model.currentPlayer);
      }, 2000);
    } else if (keyPressed === "l") {
      console.log("Le joueur a dit 'Je laisse'");
      letByVirtualPlayer(model.currentPlayer);
    } else if (keyPressed === "v") {
      console.log("Le joueur dit 'Vade Retro'");
      setTimeout(() => {
        vadeRetroByVirtualPlayer();
      }, 2000);
    } else {
      console.log(`Le joueur a commis une erreur en pressant ${keyPressed}`);
      console.log("C'est la lose !!! 😵‍💫");
    }
  } else if (type === "click") {
    console.log(`Vous avez choisi de zapper ${keyPressed}`);
    model.updateListOfZappedPlayers(model.currentPlayer);
    const playerZapped = model.extractPlayer(keyPressed);
    console.log("test model.currentPlayer", model.currentPlayer);
    carryOnZapProcess(playerZapped);
    model.recordFirstPlayerToZap();
    setTimeout(() => {
      toZapOrNotToZap(playerZapped);
    }, 2000);
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
        `${playersToHoubaHouba[0].name} & ${playersToHoubaHouba[1].name} ont tous les deux réussi à faire houba houba.`
      );
      // If both players are succesful at houba houba then the second player shall choose a new player to continue the game
      if (playersToHoubaHouba[1].human) {
        checkHumanDesignationOfANewPlayer("honky");
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

const hasTheHumanPlayerSuccesfullyDoneSatanas = function (keyPressed, index) {
  if (
    (index === 0 && keyPressed === "s") ||
    (index === 1 && keyPressed === "t") ||
    (index === 2 && keyPressed === "n")
  ) {
    return true;
  }
};

const checkHumanResponsesToVadeRetro = function (keyPressed) {
  // We start by erasing the commands shown to the human player
  buttonsView.clearCommands();

  // We need to know the position of the humain player in the array of the players who are going to react to Vade Retro
  const index = playersToSatanas.findIndex((player) => player.human === true);

  // Let us define if the human player has reacted succesfully
  // first case the player reacts succesfully;
  if (hasTheHumanPlayerSuccesfullyDoneSatanas(keyPressed, index)) {
    console.log("Le joueur a bien réagi en faisant Sa, Ta ou Nas");
    if (index === 2) {
      // If the human player is to say nas, we then shall ask the player who said ta to choose a player to call
      relaunchGameAfterVadeRetro(playersToSatanas[1]);
    } else {
      checkForSatanas(playersToSatanas[index + 1], sayings[index + 1], index + 1);
    }
  } else {
    // Case where the player reacted unsuccessfully
    console.log("Le joueur a mal dit 'Sa', 'Ta' ou 'Nas'");
    console.log("C'est la lose !!! 😵‍💫");
  }
};

// This function allow the player to do Houba Houba via the graphic interface
export const humanResponseToHonkyTonk = function (houba) {
  // virtualHouba stores the information wether the virtual player involved
  virtualHouba = houba;
  buttonsView.showHonkyTonkCommands();
  buttonsView.handlePlayerResponseToHonkyTonk(checkHumanResponsesToHonkyTonk);
};

// This function allow the player to do sa, ta ou nas via the graphic interface
export const humanResponseToVadeRetro = function (saying) {
  buttonsView.showVadeRetroCommands(saying);
  buttonsView.handlePlayerResponseToVadeRetro(checkHumanResponsesToVadeRetro);
};

export const checkHumanDesignationOfANewPlayer = function (shot) {
  buttonsView.showCallNewPlayerCommands();
  playersView.handleHumanChoiceOfANewPlayer(callPlayer, shot);
};

export const checkReactionToBeingCalled = function (boolean, noise) {
  buttonsView.clearCommands();
  if (boolean) {
    handleHumanTurnToPlay();
  } else {
    console.log(`Le joueur a mal dit ${noise}`);
    console.log("C'est la lose !!! 😵‍💫");
  }
};

export const humanReactionToBeingCalledAfterHoubaHouba = function (noise) {
  buttonsView.ShowNameCalledCommands(noise);
  buttonsView.handlePlayerResponseToCall(checkReactionToBeingCalled, noise);
};

export const checkHumanReactionToLet = function (key) {
  buttonsView.clearCommands();
  if (key === "p") {
    console.log("Le joueur a bien dit 'Je prends'");
    // We need to specify that the current player is now the human player
    model.updateCurrentPlayer("Camille");
    handleHumanTurnToPlay();
  } else {
    console.log("Le joueur a mal dit 'Je prends'");
    console.log("C'est la lose !!! 😵‍💫");
  }
  // This variable indicates that an action has been undertaken by the human player and that there therefore is no need for a virtual player to step in
  hasTheHumanPlayerTriedToTake = true;
};

export const humanReactionToLet = function (reactionTime) {
  buttonsView.showLetCommands();
  buttonsView.handlePlayerResponseToLet(checkHumanReactionToLet, reactionTime);
  // If a let shot has already been played, we should reset hasTheHumanPlayerTryToTake to false so that tha play action is not blocked.
  hasTheHumanPlayerTriedToTake = false;
};

export const humanResponseToZap = function () {
  buttonsView.showZapCommands();
  playersView.handleHumanChoiceOfANewPlayer(checkIfHumanZapGoneWell);
};

export const checkIfHumanZapGoneWell = function (name) {
  console.log(`Vous avez choisi de zapper ${name}`);
  // We shall convert the name we got from the click of the player in to an object from the model
  const playerZapped = model.extractPlayer(name);
  // 2 cases : the chosen player has already benne zapped or not
  if (playerZapped.zapped) {
    console.log(`${name} a déjà été zappé`);
    console.log("C'est la lose !!! 😵‍💫");
  } else {
    console.log(`${name} n'a pas encore été zappé`);
    // We then let the zapped virtual player carry on with the game
    carryOnZapProcess(playerZapped);
    setTimeout(() => {
      toZapOrNotToZap(playerZapped);
    }, 2000);
  }
};
