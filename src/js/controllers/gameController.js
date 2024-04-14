import * as model from "../model";
import playersView from "../views/playersView";

import { randomInt, defineMax, hasAPlayerCommitedAMistake } from "../helpers";
import { handleHumanTurnToPlay } from "./buttonsController";
import { honkyTonkByVirtualPlayer } from "./honkyController";
import { vadeRetroByVirtualPlayer } from "./vadeRetroController";
import { letByVirtualPlayer } from "./letController";

if (module.hot) {
  module.hot.accept();
}

const showPlayers = function (players, player) {
  // Show the players on the screen
  playersView.renderPlayers(players);
  // Show who is the player currently playing
  playersView.highlightActivePlayer(player);
};

const startGame = function () {
  // Since this is the very beginning of the game, we start with all the players involved

  //We choose the first player and then launch the game
  const firstPlayer = model.chooseFirstPlayer();

  // We show the players on scren
  showPlayers(model.currentPlayers, firstPlayer);

  // Select randomly the direction towards which the game will start
  model.chooseDirectionForFirstYa();

  // Launch the game with a ya
  // Change the console log by a graphic representation in a view in the future
  console.log(`${firstPlayer.name} commence le jeu en faisant un ya vers la ${model.gameDirection}`);
  model.changePlayer(firstPlayer);
};

export const mistakesWereMade = function (player = model.currentPlayer) {
  // What happens if a player makes a mistake ?
  console.log(`${player.name} has commited a mistake and must leave the game`);

  // Get rid of the player that has commited a mistake
  model.updateCurrentPlayers(player);

  // Guard function to end the game if only two players have not been eliminated
  if (model.currentPlayers.length === 2) {
    playersView.renderPlayers(model.currentPlayers);
    console.log(
      `Il n'y a plus que deux joueurs : ${model.currentPlayers[0].name} et ${model.currentPlayers[1].name} donc le jeu est fini`
    );
    // The game ends here and the human player has won
    console.log("🥇🥇🥇 Bravo !! vous avez gagné 🥇🥇🥇");
    //

    return;
  }
  //We wait 4 seconds before re-starting the game
  setTimeout(() => {
    startGame();
    humanOrMachine();
  }, 4000);
};

// This function will make the virtual player chooe between different shots depending on the players profile and then handles the various actions that will follow.
export const virtualPlayerChoice = function (player) {
  // Highlight the player whose turn it is to play on the graphical representation
  playersView.highlightActivePlayer(player);

  // Define a random number to help choose an option
  const randomNumber = randomInt(0, defineMax(player));
  console.log(`${player.name} is ${player.riskProfile} and got ${randomNumber} as a random number`);

  // Depending on this random number, we then select a shot for the virtual player to play
  if (randomNumber <= 3) {
    console.log(`${player.name} has chosen to hold down`);
    model.changeDirectionAfterHoldDown();
    // Guard to stop the game if a mistake has been committed
    if (hasAPlayerCommitedAMistake(player, "hold down")) {
      console.log(` 😡😡😡 ${player.name} has failed while trying to hold down. ${player.name} is eliminated 😡😡😡`);
      mistakesWereMade();
      return;
    }
    model.changePlayer(player);
  } else if (randomNumber > 3 && randomNumber <= 6) {
    console.log(`${player.name} has chosen to honky tonk`);
    honkyTonkByVirtualPlayer(player, model.currentPlayers, model.gameDirection);
    return;
  } else if (randomNumber > 6 && randomNumber <= 10) {
    console.log(`${player.name} has chosen to ahi`);
    // Guard if a mistake has been committed
    if (hasAPlayerCommitedAMistake(player, "ahi")) {
      console.log(` 😡😡😡 ${player.name} has failed while trying to ahi. ${player.name} is eliminated 😡😡😡`);
      mistakesWereMade();
      return;
    }
    console.log(`${player.name} a bien fait ahi`);
    model.changePlayer(player, 2);
  } else if (randomNumber > 10 && randomNumber <= 15) {
    // Guard to prevent the game from continuing if the player who's trying to let commits a mistake while doing so
    if (hasAPlayerCommitedAMistake(player, "let")) {
      console.log(` 😡😡😡 ${player.name} has failed while trying to let. ${player.name} is eliminated 😡😡😡`);
      mistakesWereMade();
      return;
    }
    console.log(`${player.name} has chosen to let`);
    letByVirtualPlayer(player);
    return;
  } else if (randomNumber > 15 && randomNumber <= 180) {
    console.log(`${player.name} has chosen to Vade Retro`);
    vadeRetroByVirtualPlayer(player, model.currentPlayers, model.gameDirection);
    return;
  } else {
    console.log(`${player.name} has chosen to ya`);
    // Guard to stop the game if a mistake has been committed
    if (hasAPlayerCommitedAMistake(player, "ya")) {
      console.log(`😡😡😡 ${player.name} has failed while trying to ya. ${player.name} is eliminated 😡😡😡`);
      mistakesWereMade();
      return;
    }

    model.changePlayer(player);
  }

  // We go back to testing if the player is virtual or human and relaunch the game
  setTimeout(() => humanOrMachine(model.currentPlayer), 2000);
};

export const humanOrMachine = function () {
  //We check if the player that shall play now is human or not
  if (model.isHumanPlayerInvolved()) {
    //The human player cannot be selected to start the game for the sake of simplicity
    //What happens if the human player is selected in the course of the game
    console.log("C'est au tour du joueur humain de jouer");
    handleHumanTurnToPlay();
  } else {
    console.log(`C'est au tour de ${model.currentPlayer.name} de jouer. Que va-t-il se passer ?`);
    // if the player is virtual, then it automatically plays its turn
    // Make the virtual player decide which shot he is going to play
    virtualPlayerChoice(model.currentPlayer);
  }
};

export const initializeGame = function () {
  model.createInitialListOfPlayers();
  // The function to create the initial list of players is separated from startGame() so that we can use said function to restart a game after an elimination without re-creating a whole new array of players
  startGame();
  humanOrMachine();
};
