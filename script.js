"use strict";

const players = [{ name: "Patrick" }, { name: "Jean-Claude" }, { name: "Claudine" }, { name: "Martine" }];

class playTurnCl {
  constructor(players) {
    this.players = players;
    this.currentPlayer;
    this.gameDirection;
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
  }

  choseFirstPlayer() {
    // We create a random integer
    const indexOfFirstPlayer = this.randomInt(-1, this.players.length - 1);
    // We chose a player from the array
    this.currentPlayer = this.players[indexOfFirstPlayer];
    console.log("firstPlayer", this.currentPlayer);
  }

  firstPlayerLaunchGame() {
    const rand1 = this.randomInt(0, 2);
    if (rand1 === 1) {
      this.playYaLeft(this.currentPlayer);
    } else {
      this.playYaRight(this.currentPlayer);
    }
  }

  playYaLeft(currentPlayer) {
    this.gameDirection = "left";
    console.log(`${currentPlayer.name} does a Ya towards the ${this.gameDirection}`);
    const indexOfCurrentPlayer = this.players.indexOf(this.currentPlayer);
    console.log("indexOfCurrentPlayer", indexOfCurrentPlayer);
    if (indexOfCurrentPlayer === 0) {
      console.log("on repart à la fin de l'array");
      this.currentPlayer = this.players[this.players.length - 1];
    } else {
      console.log("test ok pour gauche");
      this.currentPlayer = this.players[indexOfCurrentPlayer - 1];
    }
    console.log("joueur actuel:", this.currentPlayer);
  }

  playYaRight(currentPlayer) {
    this.gameDirection = "right";
    console.log(`${currentPlayer.name} does a Ya towards the ${this.gameDirection}`);
    const indexOfCurrentPlayer = this.players.indexOf(this.currentPlayer);
    console.log("indexOfCurrentPlayer", indexOfCurrentPlayer);
    if (indexOfCurrentPlayer === this.players.length - 1) {
      console.log("on repart au début de l'array");
      this.currentPlayer = this.players[0];
    } else {
      console.log("test ok pour droite");
      this.currentPlayer = this.players[indexOfCurrentPlayer + 1];
    }
    console.log("joueur actuel:", this.currentPlayer);
  }
}

const test = new playTurnCl(players);
test.choseFirstPlayer();
test.firstPlayerLaunchGame();
