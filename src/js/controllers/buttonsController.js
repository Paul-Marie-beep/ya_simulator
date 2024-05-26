"use strict";

import * as eventsDisplay from "./eventsDisplayController.js";
import * as model from "../model.js";
import buttonsView from "../views/buttonsView.js";
import playersView from "../views/playersView.js";

import { virtualPlayerChoice, mistakesWereMade } from "./gameController.js";
import { callPlayer, relaunchGameAfterHoubaHouba, honkyTonkByVirtualPlayer } from "./honkyController.js";
import {
  playersToSatanas,
  relaunchGameAfterVadeRetro,
  checkForSatanas,
  sayings,
  vadeRetroByVirtualPlayer,
} from "./vadeRetroController.js";
import { letByVirtualPlayer } from "./letController.js";
import { carryOnZapProcess, toZapOrNotToZap, eraseZapConditions, zapCounter, lastZap } from "./zapController.js";
import { endGamebyDefeat } from "./farewellController.js";
import { defineReactionTime } from "../helpers.js";
import { TIMEOUT } from "../config.js";

let virtualHouba;
export let hasTheHumanPlayerTriedToTake;

// Function to check that the player has made a ya in the right direction
const checkDirection = function (direction) {
  if (direction === model.gameDirection) {
    // The player has chosen the right direction for his ya
    console.log("Le joueur a fait un ya dans le bon sens");
    eventsDisplay.humanPlayerValidation("Ya");
    model.changePlayer(model.currentPlayer);
    setTimeout(() => {
      virtualPlayerChoice(model.currentPlayer);
    }, TIMEOUT);
  } else {
    //The player has lost the game
    eventsDisplay.humanPlayerMistakewarning("Ya");
    console.log("C'est la lose !!! 😵‍💫");
    setTimeout(() => endGamebyDefeat(), TIMEOUT + 1000);
  }
};

const checkIfTheHumanPlayerHasZappedHimself = function (playerZapped) {
  if (playerZapped.numero === model.currentPlayer.numero) {
    return true;
  } else {
    return false;
  }
};

// Function to terminate the game if a human player tries to zap himself
// Two potential occurences :
//   1°) When the human player initiates a zap
//   2°) When a human player is reacting to a zap
const actIfAHumanPlayerHasZappedhimself = function () {
  console.log("Vous ne pouvez pas vous zapper vous-même");
  eventsDisplay.serviceMessage("Vous ne pouvez pas vous auto-zapper");
  eventsDisplay.humanPlayerMistakewarning("Zap");
  console.log("C'est la lose !!! 😵‍💫");
  eraseZapConditions();
  setTimeout(() => endGamebyDefeat(), TIMEOUT + 1000);
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
      eventsDisplay.humanPlayerValidation("Hold Down");
      model.changeDirectionAfterHoldDown();
      model.changePlayer(model.currentPlayer);
      setTimeout(() => {
        virtualPlayerChoice(model.currentPlayer);
      }, TIMEOUT);
    } else if (keyPressed === "ArrowLeft") {
      const dir = "left";
      checkDirection(dir);
    } else if (keyPressed === "ArrowRight") {
      const dir = "right";
      checkDirection(dir);
    } else if (keyPressed === "o") {
      console.log("le joueur a fait un honky tonk");
      eventsDisplay.humanPlayerValidation("Honky Tonk");
      setTimeout(() => {
        honkyTonkByVirtualPlayer();
      }, TIMEOUT);
    } else if (keyPressed === "a") {
      console.log("le joueur a fait un ahi");
      eventsDisplay.humanPlayerValidation("Ahi");
      model.changePlayer(model.currentPlayer, 2);
      setTimeout(() => {
        virtualPlayerChoice(model.currentPlayer);
      }, TIMEOUT);
    } else if (keyPressed === "l") {
      console.log("Le joueur a dit 'Je laisse'");
      eventsDisplay.humanPlayerValidation("Je laisse");
      humanReactionToLet();
      // letByVirtualPlayer(model.currentPlayer);
    } else if (keyPressed === "v") {
      console.log("Le joueur dit 'Vade Retro'");
      eventsDisplay.humanPlayerValidation("Vade Retro");
      setTimeout(() => {
        vadeRetroByVirtualPlayer();
      }, TIMEOUT);
    } else {
      console.log(`Le joueur a commis une erreur en pressant ${keyPressed}`);
      eventsDisplay.humanTypingMistake(keyPressed);
      console.log("C'est la lose !!! 😵‍💫");
      setTimeout(() => endGamebyDefeat(), TIMEOUT + 1000);
    }
  } else if (type === "click") {
    console.log(`Vous avez choisi de zapper ${keyPressed}`);
    eventsDisplay.serviceMessage(`Vous avez choisi de zapper ${keyPressed}`);
    // We must record that if the human player initiated the zap, he or she has to be considered as "zapped"
    model.updateListOfZappedPlayers(model.currentPlayer);
    const playerZapped = model.extractPlayer(keyPressed);
    // Guard to prevent a human player frome zapping him or herself
    if (checkIfTheHumanPlayerHasZappedHimself(playerZapped)) {
      actIfAHumanPlayerHasZappedhimself();
      return;
    }
    console.log("test model.currentPlayer", model.currentPlayer);
    carryOnZapProcess(playerZapped);
    model.recordFirstPlayerToZap();
    setTimeout(() => {
      toZapOrNotToZap(playerZapped);
    }, TIMEOUT);
  }
};

export const triggerCommandsPopup = function () {
  // Show the popup if needed
  buttonsView.showCommandsToPlayer();
};

export const handleHumanTurnToPlay = function () {
  playersView.highlightActivePlayer(model.currentPlayer);
  // Offer the human player the possibility to see the various commands
  buttonsView.showShotsCommands();
  buttonsView.handlePlayerResponseToShot(checkHumanResponsesToShot);
};

// This function checks that Houba Houba has been done successfully
const checkHumanResponsesToHonkyTonk = function (keyPressed, playersToHoubaHouba) {
  // We start by  erasing the commands shown to the human player
  buttonsView.clearCommands();

  // First case, the player reacts successfully
  if (keyPressed === "b") {
    console.log("le joueur a bien fait Houba Houba");
    eventsDisplay.humanPlayerValidation("Houba Houba");
    // If both player  managed to Houba Houba
    if (!virtualHouba) {
      console.log(
        `${playersToHoubaHouba[0].name} & ${playersToHoubaHouba[1].name} ont tous les deux réussi à faire houba houba.`
      );
      // If both players are succesful at houba houba then the second player shall choose a new player to continue the game
      if (playersToHoubaHouba[1].human) {
        // We take advantage of the test to provide the human player with the name of the virtual player that successfully said "Houba Houba"
        eventsDisplay.virtualPlayerNoiseAnnouncement(playersToHoubaHouba[0].name, "Houba Houba");
        setTimeout(() => checkHumanDesignationOfANewPlayer("honky"), TIMEOUT - 1000);
      } else {
        eventsDisplay.virtualPlayerNoiseAnnouncement(playersToHoubaHouba[1].name, "Houba Houba");
        setTimeout(() => relaunchGameAfterHoubaHouba(playersToHoubaHouba[1]), TIMEOUT - 1000);
      }
    } else if (virtualHouba) {
      // If the virtual player fails to Houba Houba
      const virtualPlayerToKick = playersToHoubaHouba.find((pl) => pl.human === false);
      console.log(`${virtualPlayerToKick.name} has failed to Houba Houba`);
      console.log(`${virtualPlayerToKick.name} must go !!`);
      eventsDisplay.virtualPlayerMistakeWarning(virtualPlayerToKick.name, "Houba Houba");
      mistakesWereMade(virtualPlayerToKick);
      return;
    }
    // 2nd case, the player doesn't
  } else {
    console.log("Le joueur a mal fait Houba Houba");
    eventsDisplay.humanPlayerMistakewarning("Houba Houba");
    console.log("C'est la lose !!! 😵‍💫");
    setTimeout(() => endGamebyDefeat(), TIMEOUT + 1000);
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
    eventsDisplay.humanPlayerValidation("Sa, Ta ou Nas");
    if (index === 2) {
      // If the human player is to say nas, we then shall ask the player who said ta to choose a player to call
      relaunchGameAfterVadeRetro(playersToSatanas[1]);
    } else {
      checkForSatanas(playersToSatanas[index + 1], sayings[index + 1], index + 1);
    }
  } else {
    // Case where the player reacted unsuccessfully
    console.log("Le joueur a mal dit 'Sa', 'Ta' ou 'Nas'");
    eventsDisplay.humanPlayerMistakewarning("Sa, Ta ou Nas");
    console.log("C'est la lose !!! 😵‍💫");
    setTimeout(() => endGamebyDefeat(), TIMEOUT + 1000);
  }
};

// This function allow the player to do Houba Houba via the graphic interface
export const humanResponseToHonkyTonk = function (houba, playersReactingToHonkyTonk) {
  // virtualHouba stores the information wether the virtual player involved
  virtualHouba = houba;
  buttonsView.showHonkyTonkCommands();
  buttonsView.handlePlayerResponseToHonkyTonk(checkHumanResponsesToHonkyTonk, playersReactingToHonkyTonk);
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
    console.log(`"Le joueur a bien dit ${noise}`);
    eventsDisplay.humanPlayerValidation(noise);
    setTimeout(() => handleHumanTurnToPlay(), TIMEOUT - 1000);
  } else {
    console.log(`Le joueur a mal dit ${noise}`);
    eventsDisplay.humanPlayerMistakewarning(noise);
    console.log("C'est la lose !!! 😵‍💫");
    setTimeout(() => endGamebyDefeat(), TIMEOUT + 1000);
  }
};

export const humanReactionToBeingCalledAfterHoubaHouba = function (noise) {
  buttonsView.ShowNameCalledCommands(noise);
  buttonsView.handlePlayerResponseToCall(checkReactionToBeingCalled, noise);
};

export const eraseHumanCheck = function () {
  hasTheHumanPlayerTriedToTake = "";
};

export const checkHumanReactionToLet = function (key) {
  buttonsView.clearCommands();
  if (key === "p") {
    console.log("Le joueur a bien dit 'Je prends'");
    eventsDisplay.humanPlayerValidation("Je prends");
    // We need to specify that the current player is now the human player (hardcoded for now)
    model.updateCurrentPlayer(`${model.humanPlayerName}`);
    console.log("test");
    setTimeout(() => handleHumanTurnToPlay(), TIMEOUT - 1000);
  } else {
    console.log("Le joueur a mal dit 'Je prends'");
    eventsDisplay.humanPlayerMistakewarning("Je prends");
    console.log("C'est la lose !!! 😵‍💫");
    setTimeout(() => endGamebyDefeat(), TIMEOUT + 1000);
  }
};

export const MakeAVirtualPlayerTake = function () {
  letByVirtualPlayer(model.currentPlayer);
};

export const humanReactionToLet = function () {
  buttonsView.showLetCommands();
  const reactionTime = defineReactionTime();
  buttonsView.handlePlayerResponseToLet(checkHumanReactionToLet, MakeAVirtualPlayerTake, reactionTime);
};

export const humanResponseToZap = function () {
  buttonsView.showZapCommands();
  playersView.handleHumanChoiceOfANewPlayer(lookForZapOrTake);
};

export const lookForZapOrTake = function (name) {
  // Dont show the instructions any more
  buttonsView.clearCommands();
  if (name === "take") {
    // The human player said "Je prends" successfully
    eventsDisplay.humanPlayerValidation("Je prends");
    eraseZapConditions();
    setTimeout(() => handleHumanTurnToPlay(), TIMEOUT - 1000);
  } else if (name === "mistake") {
    // The human player did not say "Je prends" successfully
    eventsDisplay.serviceMessage("Vous n'avez pas appuyé sur le bonne touche");
    eventsDisplay.humanPlayerMistakewarning("Je prends");
    console.log("C'est la lose !!! 😵‍💫");
    eraseZapConditions();
    setTimeout(() => endGamebyDefeat(), TIMEOUT + 1000);
  } else {
    // The human player chose to zap someone else.
    checkIfHumanZapGoneWell(name);
  }
};

export const checkIfHumanZapGoneWell = function (name) {
  console.log(`Vous avez choisi de zapper ${name}`);
  eventsDisplay.serviceMessage(`Vous avez choisi de zapper ${name}`);
  // We shall convert the name we got from the click of the player in to an object from the model
  const playerZapped = model.extractPlayer(name);

  // Guard to prevent a human player frome zapping him or herself
  if (checkIfTheHumanPlayerHasZappedHimself(playerZapped)) {
    actIfAHumanPlayerHasZappedhimself();
    return;
  }

  // We shall check if we are in a last Zap situation and act accordingly
  if (zapCounter === model.currentPlayers.length - 1) {
    console.log("Tous les joueurs ont été zappés !!!");
    eventsDisplay.serviceMessage("🙉 Tous les joueurs ont été zappés !!!");
    lastZap(model.currentPlayer, playerZapped);
    return;
  }

  // 2 cases : the chosen player has already benne zapped or not

  if (playerZapped.zapped) {
    console.log(`${name} a déjà été zappé`);
    eventsDisplay.serviceMessage("Vous ne pouvez zapper quelqu'un qui a déjà été zappé");
    eventsDisplay.humanPlayerMistakewarning("Je prends");
    console.log("C'est la lose !!! 😵‍💫");
    eraseZapConditions();
    setTimeout(() => endGamebyDefeat(), TIMEOUT + 1000);
  } else {
    console.log(`${name} n'a pas encore été zappé`);
    eventsDisplay.serviceMessage("Vous avez zappé quelqu'un qui n'a pas encore été zappé");
    eventsDisplay.humanPlayerValidation("Zap");
    // We then let the zapped virtual player carry on with the game
    carryOnZapProcess(playerZapped);
    setTimeout(() => {
      toZapOrNotToZap(playerZapped);
    }, TIMEOUT);
  }
};
