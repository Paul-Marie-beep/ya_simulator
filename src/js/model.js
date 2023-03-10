"use strict";

const players = [
  { name: "Camille", human: true },
  { name: "Patrick", riskProfile: "bold" },
  { name: "Jean-Claude", riskProfile: "cautious" },
  { name: "Claudine", riskProfile: "bold" },
  { name: "Martine", riskProfile: "average" },
  { name: "Michel", riskProfile: "average" },
];

export const currentPlayers = players;
let currentPlayer;
let gameDirection;

const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};

export const chooseFirstPlayer = function () {
  // We create a random integer
  const indexOfFirstPlayer = randomInt(-1, currentPlayers.length - 1);

  // Guard to make sure we don't select the human player
  if (currentPlayers[indexOfFirstPlayer].human) chooseFirstPlayer();

  // We chose a player from the array
  currentPlayer = currentPlayers[indexOfFirstPlayer];

  // The direction of the game is re-initialized
  gameDirection = "";

  console.log("firstPlayer", currentPlayer);
};

export const firstPlayerLaunchGame = function () {
  const rand1 = randomInt(0, 2);
  if (rand1 === 1) {
    gameDirection = "left";
  } else {
    gameDirection = "right";
  }
  return playYa();
};

export const changePlayer = function (player, direction) {
  const indexOfCurrentPlayer = currentPlayers.indexOf(player);

  if (direction === "left") {
    if (indexOfCurrentPlayer === 0) {
      console.log("on repart à la fin de l'array");
      currentPlayer = currentPlayers[currentPlayers.length - 1];
    } else {
      console.log("le tour passe au joueur à gauche");
      currentPlayer = currentPlayers[indexOfCurrentPlayer - 1];
    }
    console.log("joueur actuel après changement:", currentPlayer);
  }

  if (direction === "right") {
    if (indexOfCurrentPlayer === currentPlayers.length - 1) {
      console.log("on repart au début de l'array");
      currentPlayer = currentPlayers[0];
    } else {
      console.log("le tour passe au joueur à droite");
      currentPlayer = currentPlayers[indexOfCurrentPlayer + 1];
    }
    console.log("joueur actuel après changement:", currentPlayer.name);
  }
};

const playHoldDown = function (player) {
  // We change the direction of the game
  gameDirection === "left" ? (gameDirection = "right") : (gameDirection = "left");
  // We select a new current player
  changePlayer(player, gameDirection);
  // Trigger another action
  actionDecisionMaking(currentPlayer);
};

const playYa = function () {
  console.log(`${currentPlayer.name} does a Ya towards the ${gameDirection}`);

  // // We change the current player
  // changePlayer(currentPlayer, gameDirection);

  // // We trigger the action of the next player
  // actionDecisionMaking(currentPlayer);
  return;
};

const decisionTree = function (player, numb) {
  // We put a delay for the game not to be rushed
  setTimeout(
    (currentPlayer, randomNumber) => {
      if (randomNumber === 1) {
        console.log(`${currentPlayer.name} has chosen to Zap`);
      } else if (randomNumber === 2) {
        console.log(`${currentPlayer.name} has chosen to "Je laisse"`);
      } else if (randomNumber === 3) {
        console.log(`${currentPlayer.name} has chosen to "Vade Retro"`);
      } else if (randomNumber === 4) {
        console.log(`${currentPlayer.name} has chosen to "Honcky Tonk"`);
      } else if (randomNumber === 5) {
        console.log(`${currentPlayer.name} has chosen to "Hold Down"`);
        playHoldDown(currentPlayer);
      } else if (randomNumber === 6) {
        console.log(`${currentPlayer.name} has chosen to "Peter"`);
      } else if (randomNumber === 7) {
        console.log(`${currentPlayer.name} has chosen to "Hip Hip Hip"`);
      } else {
        console.log(`${currentPlayer.name} has chosen to Ya to the ${gameDirection}`);
        playYa(currentPlayer);
      }
    },
    2000,
    player,
    numb
  );
};

export const actionDecisionMaking = function () {
  // Define different reactions depending on the players profile.
  let max;
  if (currentPlayer.riskProfile === "cautious") max = 20;
  if (currentPlayer.riskProfile === "average") max = 15;
  if (currentPlayer.riskProfile === "bold") max = 10;

  // Define a random number to help choose an option
  const randomNumber = randomInt(0, max);
  console.log(`${player.name} is ${player.riskProfile} and got ${randomNumber} as a random number`);

  // Assign an action to the player
  decisionTree(player, randomNumber);
};
