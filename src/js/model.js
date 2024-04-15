"use strict";

import { randomInt } from "./helpers";

// const players = [
//   { numero: 1, name: "Camille", human: true, zapped: false  },
//   { numero: 2, name: "Patrick", riskProfile: "bold", skill: "low", human: false, zapped: false  },
//   { numero: 3, name: "Jean-Claude", riskProfile: "cautious", skill: "low", human: false, zapped: false  },
//   { numero: 4, name: "Claudine", riskProfile: "bold", skill: "average", human: false, zapped: false  },
//   { numero: 5, name: "Martine", riskProfile: "average", skill: "average", human: false, zapped: false  },
//   { numero: 6, name: "Michel", riskProfile: "average", skill: "high", human: false, zapped: false  },
// ];
const players = [
  { numero: 1, name: "Camille", human: true, zapped: false },
  { numero: 2, name: "Patrick", riskProfile: "bold", skill: "high", human: false, zapped: false },
  { numero: 3, name: "Jean-Claude", riskProfile: "cautious", skill: "high", human: false, zapped: false },
  { numero: 4, name: "Claudine", riskProfile: "bold", skill: "high", human: false, zapped: false },
  { numero: 5, name: "Martine", riskProfile: "average", skill: "high", human: false, zapped: false },
  { numero: 6, name: "Michel", riskProfile: "average", skill: "high", human: false, zapped: false },
];

export let currentPlayers;
export let currentPlayer;
export let gameDirection;
export let playerInitiatingAZap;

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

export const chooseRandomPlayer = function (player = "") {
  // For the zap shot, we need the possibility for a random player to select a player that is not himself
  const transitArray = currentPlayers.filter((pl) => pl !== player);

  // Case where a player has to be selected after, let's say, Honky Tonk or Vade Retro. Therefore, the human player is also part of the equation this time
  // The game direction is not modified, hence the need for another function
  let indexOfNewPlayer = randomInt(0, transitArray.length - 1);
  currentPlayer = transitArray[indexOfNewPlayer];
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

export const lookForPlayersReactingToHonkyTonk = function () {
  const indexOfCurrentPlayer = currentPlayers.indexOf(currentPlayer);

  // We want to return an array of players who will have to houba houba
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

export const lookForPlayersReactingToVadeRetro = function () {
  const indexOfCurrentPlayer = currentPlayers.indexOf(currentPlayer);

  // We want to return an array of players who will have to sa ta nas
  if (gameDirection === "left") {
    if (indexOfCurrentPlayer >= 3)
      return [
        currentPlayers[indexOfCurrentPlayer - 1],
        currentPlayers[indexOfCurrentPlayer - 2],
        currentPlayers[indexOfCurrentPlayer - 3],
      ];
    if (indexOfCurrentPlayer === 2)
      return [
        currentPlayers[indexOfCurrentPlayer - 1],
        currentPlayers[indexOfCurrentPlayer - 2],
        currentPlayers[currentPlayers.length - 1],
      ];
    if (indexOfCurrentPlayer === 1)
      return [
        currentPlayers[indexOfCurrentPlayer - 1],
        currentPlayers[currentPlayers.length - 1],
        currentPlayers[currentPlayers.length - 2],
      ];
    if (indexOfCurrentPlayer === 0)
      return [
        currentPlayers[currentPlayers.length - 1],
        currentPlayers[currentPlayers.length - 2],
        currentPlayers[currentPlayers.length - 3],
      ];
  } else {
    if (indexOfCurrentPlayer <= currentPlayers.length - 4)
      return [
        currentPlayers[indexOfCurrentPlayer + 1],
        currentPlayers[indexOfCurrentPlayer + 2],
        currentPlayers[indexOfCurrentPlayer + 3],
      ];
    if (indexOfCurrentPlayer === currentPlayers.length - 3)
      return [currentPlayers[indexOfCurrentPlayer + 1], currentPlayers[indexOfCurrentPlayer + 2], currentPlayers[0]];
    if (indexOfCurrentPlayer === currentPlayers.length - 2)
      return [currentPlayers[indexOfCurrentPlayer + 1], currentPlayers[0], currentPlayers[1]];
    if (indexOfCurrentPlayer === currentPlayers.length - 1)
      return [currentPlayers[0], currentPlayers[1], currentPlayers[2]];
  }
};

export const updateListOfZappedPlayers = function (obj) {
  const playerZapped = currentPlayers.find((player) => player === obj);
  playerZapped.zapped = true;
  console.log("🐹🐹 Test zap update 🐹🐹", currentPlayers);
};

export const unzapAllPlayers = function () {
  currentPlayers.forEach((player) => (player.zapped = false));
};

export const firstPlayerToZap = function (player) {
  updateListOfZappedPlayers(player);
  playerInitiatingAZap = player;
};

export const endOfZap = function () {
  // Reset the name of the first player to zap
  playerInitiatingAZap = "";
  // set that no players have not been zapped
  unzapAllPlayers();
};
