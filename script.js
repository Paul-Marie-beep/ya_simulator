"use strict";

const players = [
  { name: "Patrick", riskProfile: "bold" },
  { name: "Jean-Claude", riskProfile: "cautious" },
  { name: "Claudine", riskProfile: "bold" },
  { name: "Martine", riskProfile: "average" },
  { name: "Michel", riskProfile: "average" },
];

class playTurnCl {
  constructor(players) {
    this.players = players;
    this.currentPlayer;
    this.gameDirection = "";
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
  }

  choseFirstPlayer() {
    // The direction of the game is re-initialized
    this.gameDirection = "";
    // We create a random integer
    const indexOfFirstPlayer = this.randomInt(-1, this.players.length - 1);
    // We chose a player from the array
    this.currentPlayer = this.players[indexOfFirstPlayer];
    console.log("firstPlayer", this.currentPlayer);
  }

  firstPlayerLaunchGame() {
    const rand1 = this.randomInt(0, 2);
    if (rand1 === 1) {
      this.gameDirection = "left";
    } else {
      this.gameDirection = "right";
    }
    this.playYa(this.currentPlayer);
  }

  changePlayer(currentPlayer, direction) {
    const indexOfCurrentPlayer = this.players.indexOf(currentPlayer);

    if (direction === "left") {
      if (indexOfCurrentPlayer === 0) {
        console.log("on repart à la fin de l'array");
        this.currentPlayer = this.players[this.players.length - 1];
      } else {
        console.log("le tour passe au joueur à gauche");
        this.currentPlayer = this.players[indexOfCurrentPlayer - 1];
      }
      console.log("joueur actuel après changement:", this.currentPlayer);
    }

    if (direction === "right") {
      if (indexOfCurrentPlayer === this.players.length - 1) {
        console.log("on repart au début de l'array");
        this.currentPlayer = this.players[0];
      } else {
        console.log("le tour passe au joueur à droite");
        this.currentPlayer = this.players[indexOfCurrentPlayer + 1];
      }
      console.log("joueur actuel après changement:", this.currentPlayer.name);
    }
  }

  playHoldDown(currentPlayer) {
    // We change the direction of the game
    this.gameDirection === "left" ? (this.gameDirection = "right") : (this.gameDirection = "left");
    // We select a new current player
    this.changePlayer(currentPlayer, this.gameDirection);
    // Trigger another action
    this.actionDecisionMaking(this.currentPlayer);
  }

  playPeterPan() {}

  playYa(currentPlayer) {
    console.log(`${currentPlayer.name} does a Ya towards the ${this.gameDirection}`);

    // We change the current player
    this.changePlayer(currentPlayer, this.gameDirection);

    // We trigger the action of the next player
    this.actionDecisionMaking(this.currentPlayer);
  }

  decisionTree(currentPlayer, randomNumber) {
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
          this.playHoldDown(currentPlayer);
        } else if (randomNumber === 6) {
          console.log(`${currentPlayer.name} has chosen to "Peter"`);
        } else if (randomNumber === 7) {
          console.log(`${currentPlayer.name} has chosen to "Hip Hip Hip"`);
        } else {
          console.log(`${currentPlayer.name} has chosen to Ya to the ${this.gameDirection}`);
          this.playYa(currentPlayer);
        }
      },
      2000,
      currentPlayer,
      randomNumber
    );
  }

  actionDecisionMaking(currentPlayer) {
    // Define different reactions depending on the players profile.
    let max;
    if (currentPlayer.riskProfile === "cautious") max = 20;
    if (currentPlayer.riskProfile === "average") max = 15;
    if (currentPlayer.riskProfile === "bold") max = 10;

    // Define a random number to help choose an option
    const randomNumber = this.randomInt(0, max);
    console.log(`${currentPlayer.name} is ${currentPlayer.riskProfile} and got ${randomNumber} as a random number`);

    // Assign an action to the player
    this.decisionTree(currentPlayer, randomNumber);
  }
}

const test = new playTurnCl(players);
test.choseFirstPlayer();
test.firstPlayerLaunchGame();
