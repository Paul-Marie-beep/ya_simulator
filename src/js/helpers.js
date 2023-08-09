export const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};

export const defineMax = function (currentPlayer) {
  if (currentPlayer.riskProfile === "cautious") return 20;
  if (currentPlayer.riskProfile === "average") return 15;
  if (currentPlayer.riskProfile === "bold") return 10;
};

export const defineRandomNumberToGenerateMistakeChance = function (shotPlayed, currentPlayer) {
  if (shotPlayed === "ya") {
    if (currentPlayer.skill === "low") {
      return 80;
    } else if (currentPlayer.skill === "average") {
      return 40;
    }
  } else if (currentPlayer.skill === "high") {
    return 21;
  }
  if (shotPlayed === "hold down") {
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
    }
  } else if (currentPlayer.skill === "high") {
    return 25;
  }
  if (shotPlayed === "reaction to honky tonk") {
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
export const hitOrMissHonkyTonk = function (playerReactingToHonkyTonk) {
  // Case where the player is virtual
  console.log(`${playerReactingToHonkyTonk.name} va devoir faire "Houba Houba"`);

  if (hasAPlayerCommitedAMistake(playerReactingToHonkyTonk, "reaction to honky tonk")) {
    console.log(`${playerReactingToHonkyTonk.name} has made a mistake while doing "Houba Houba"`);
    return true;
  } else {
    return false;
  }
};
