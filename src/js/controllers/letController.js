"use strict";

import { chooseRandomPlayer } from "../model";
import { hasAPlayerCommitedAMistake } from "../helpers";
import { virtualPlayerChoice, mistakesWereMade } from "./gameController";

export const letByVirtualPlayer = function (player) {
  // IL FAUDRA UN COUPE-CIRCUIT AU CAS-OÙ LE JOUEUR HUMAIN PREND AVANT LE JOUEUR VIRTUEL

  // Guard to prevent the game from continuing if the player who's trying to let commits a mistake while doing so
  if (hasAPlayerCommitedAMistake(player, "let")) {
    console.log(` 😡😡😡 ${player.name} has failed while trying to let. ${player.name} is eliminated 😡😡😡`);
    mistakesWereMade();
    return;
  }
  const newPlayer = chooseRandomPlayer(player);

  console.log(`${newPlayer.name} a décidé de prendre`);

  // TEST POUR SAVOIR SI NEW PLAYER A REUSSI dire je prends
  if (hasAPlayerCommitedAMistake(newPlayer, "take")) {
    console.log(` 😡😡😡 ${newPlayerplayer.name} n'a pas réussi à dire "Je prends" et est éliminé`);
    mistakesWereMade();
  }

  setTimeout(() => {
    virtualPlayerChoice(newPlayer);
  }, 1000);
};
