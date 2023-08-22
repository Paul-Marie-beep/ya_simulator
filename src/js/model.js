"use strict";

import { randomInt } from "./helpers";

// const players = [
//   { numero: 1, name: "Camille", human: true },
//   { numero: 2, name: "Patrick", riskProfile: "bold", skill: "low", human: false },
//   { numero: 3, name: "Jean-Claude", riskProfile: "cautious", skill: "low", human: false },
//   { numero: 4, name: "Claudine", riskProfile: "bold", skill: "average", human: false },
//   { numero: 5, name: "Martine", riskProfile: "average", skill: "average", human: false },
//   { numero: 6, name: "Michel", riskProfile: "average", skill: "high", human: false },
// ];
const players = [
  { numero: 1, name: "Camille", human: true },
  { numero: 2, name: "Patrick", riskProfile: "bold", skill: "high", human: false },
  { numero: 3, name: "Jean-Claude", riskProfile: "cautious", skill: "high", human: false },
  { numero: 4, name: "Claudine", riskProfile: "bold", skill: "high", human: false },
  { numero: 5, name: "Martine", riskProfile: "average", skill: "high", human: false },
  { numero: 6, name: "Michel", riskProfile: "average", skill: "high", human: false },
];

export let currentPlayers;
export let currentPlayer;
export let gameDirection;

export const createInitialListOfPlayers = function () {
  currentPlayers = [];
  players.forEach((el) => currentPlayers.push(el));
};

export const chooseFirstPlayer = function () {
  // We create a random integer (for the sake of simplicity, we decide that the game will always be launched by a virtual player)
  let indexOfFirstPlayer = randomInt(1, currentPlayers.length - 1);

  // The direction of the game is re-initialized (In case we are starting again after an elimination)
  gameDirection = "";

  // We chose a player from the array
  currentPlayer = currentPlayers[indexOfFirstPlayer];
  console.log(`Le  joueur choisi est : ${currentPlayer.name}`);
  return currentPlayer;
};

export const chooseRandomPlayer = function () {
  // Case where a player has to be selected after, let's say, Honky Tonk or Vade Retro. Therefore, the human player is also part of the equation this time
  // The game direction is not modified, hence the need for another function
  let indexOfNewPlayer = randomInt(1, currentPlayers.length - 1);
  currentPlayer = currentPlayers[indexOfNewPlayer];
  return currentPlayer;
};

export const updateCurrentPlayer = function (name) {
  currentPlayer = currentPlayers.find((player) => player.name === name);
  return currentPlayer;
};

export const chooseDirectionForFirstYa = function () {
  //We randomly chose a direction with which the game will start
  const rand1 = randomInt(0, 2);
  if (rand1 === 1) {
    gameDirection = "left";
  } else {
    gameDirection = "right";
  }
};

export const updateCurrentPlayers = function (player) {
  const currentPlayerIndex = currentPlayers.indexOf(player);
  currentPlayers.splice(currentPlayerIndex, 1);
  console.log("voici le nouvel array des joueurs:", currentPlayers);
};

export const changePlayer = function (player, increment = 1) {
  const indexOfCurrentPlayer = currentPlayers.indexOf(player);
  console.log("player :", player, "index of current player :", indexOfCurrentPlayer, "increment :", increment);
  console.log(`le tour passe au joueur situé ${increment} position(s) vers la ${gameDirection}`);

  // We shoud differentiate two cases depending on the direction of the game
  if (gameDirection === "left") {
    if (indexOfCurrentPlayer - increment >= 0) {
      currentPlayer = currentPlayers[indexOfCurrentPlayer - increment];
    } else {
      currentPlayer = currentPlayers[currentPlayers.length - increment + indexOfCurrentPlayer];
    }
  } else if (gameDirection === "right") {
    if (indexOfCurrentPlayer + increment <= currentPlayers.length - 1) {
      currentPlayer = currentPlayers[indexOfCurrentPlayer + increment];
    } else {
      currentPlayer = currentPlayers[increment - (currentPlayers.length - indexOfCurrentPlayer)];
    }
  }
  console.log(currentPlayer);
  console.log("joueur actuel après changement:", currentPlayer.name, "current player human ?", currentPlayer.human);
};

export const isHumanPlayerInvolved = function () {
  if (currentPlayer.human) {
    return true;
  }
};

export const changeDirectionAfterHoldDown = function () {
  // We change the direction of the game
  gameDirection === "left" ? (gameDirection = "right") : (gameDirection = "left");
  console.log("Game direction is now :", gameDirection);
};

export const lookForPlayersReactingToHonkyTonk = function (indexOfCurrentPlayer, currentPlayers, gameDirection) {
  if (gameDirection === "left") {
    if (indexOfCurrentPlayer >= 2)
      return [currentPlayers[indexOfCurrentPlayer - 1], currentPlayers[indexOfCurrentPlayer - 2]];
    if (indexOfCurrentPlayer === 1)
      return [currentPlayers[indexOfCurrentPlayer - 1], currentPlayers[currentPlayers.length - 1]];
    if (indexOfCurrentPlayer === 0)
      return [currentPlayers[currentPlayers.length - 1], currentPlayers[currentPlayers.length - 2]];
  } else {
    if (indexOfCurrentPlayer <= currentPlayers.length - 3)
      return [currentPlayers[indexOfCurrentPlayer + 1], currentPlayers[indexOfCurrentPlayer + 2]];
    if (indexOfCurrentPlayer === currentPlayers.length - 2)
      return [currentPlayers[indexOfCurrentPlayer + 1], currentPlayers[0]];
    if (indexOfCurrentPlayer === currentPlayers.length - 1) return [currentPlayers[0], currentPlayers[1]];
  }
};
