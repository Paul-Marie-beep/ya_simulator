import { currentPlayer, gameDirection } from "./model";

export const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};

export const defineMax = function (currentPlayer) {
  if (currentPlayer.riskProfile === "cautious") return 33;
  if (currentPlayer.riskProfile === "average") return 28;
  if (currentPlayer.riskProfile === "bold") return 23;
};

export const defineRandomNumberToGenerateMistakeChance = function (shotPlayed, currentPlayer) {
  if (shotPlayed === "ya" || shotPlayed === "let") {
    if (currentPlayer.skill === "low") {
      return 80;
    } else if (currentPlayer.skill === "average") {
      return 40;
    }
  } else if (currentPlayer.skill === "high") {
    return 21;
  }
  if (shotPlayed === "hold down" || shotPlayed === "ahi") {
    if (currentPlayer.skill === "low") {
      return 90;
    } else if (currentPlayer.skill === "average") {
      return 45;
    }
  } else if (currentPlayer.skill === "high") {
    return 25;
  }
  if (shotPlayed === "honky tonk") {
    if (currentPlayer.skill === "low") {
      return 195;
    } else if (currentPlayer.skill === "average") {
      return 60;
    } else if (currentPlayer.skill === "high") {
      return 25;
    }
  }
  if (shotPlayed === "reaction to honky tonk" || shotPlayed === "take") {
    if (currentPlayer.skill === "low") {
      return 125;
    } else if (currentPlayer.skill === "average") {
      return 50;
    }
  } else if (currentPlayer.skill === "high") {
    return 22;
  }
};

// This function checks if a player has commited a mistake
export const hasAPlayerCommitedAMistake = function (player = currentPlayer, shot = shotPlayed) {
  const max = defineRandomNumberToGenerateMistakeChance(shot, player);
  const rand = randomInt(0, max);
  console.log(`Pour le % d'erreur, ${player.name} a obtenu ${rand} comme nombre aléatoire`);
  if (rand > 20) {
    return true;
  } else {
    return false;
  }
};

// This function checks if the player have been successful specifically when doing houba houba when doing houba houba and returns a boolean
export const hitOrMissHonkyTonk = function (playerReactingToShot, shot) {
  console.log(`${playerReactingToShot.name} va devoir faire "${shot}"`);

  if (hasAPlayerCommitedAMistake(playerReactingToShot, "reaction to honky tonk")) {
    console.log(`${playerReactingToShot.name} has made a mistake while doing "${shot}"`);
    return true;
  } else {
    return false;
  }
};

export const honkyTonkHelper = function (gameDirection, currentPlayers, currentPlayer) {
  const indexOfCurrentPlayer = currentPlayers.indexOf(currentPlayer);
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

export const vadeRetroHelper = function (gameDirection, currentPlayers, currentPlayer) {
  const indexOfCurrentPlayer = currentPlayers.indexOf(currentPlayer);

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

export const translateDirection = function (gameDirection) {
  if (gameDirection === "left") return "gauche";
  if (gameDirection === "right") return "droite";
};
