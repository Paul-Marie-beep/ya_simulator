"use strict";

const players = [
  { name: "Patrick", alive: true },
  { name: "Jean-Claude", alive: true },
  { name: "Claudine", alive: true },
  { name: "Martine", alive: true },
];

class playTurnCl {
  constructor(players) {
    this.players = players;
    this.firstPlayer;
  }

  choseFirstPlayer() {
    // We create a random integer
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
    const indexOfFirstPlayer = randomInt(0, this.players.length - 1);
    // We chose a player from the array
    this.firstPlayer = this.players[indexOfFirstPlayer];
    console.log("firstPlayer", this.firstPlayer);
  }
}

const test = new playTurnCl(players);
test.choseFirstPlayer();
