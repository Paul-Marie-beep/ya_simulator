//These Functions make sure that the events that are occuring are properly displayed
import playersView from "../views/playersView";

export const welcomeMessage = function () {
  playersView.renderEvents("Bonne chance Camille. Le jeu commence !!", "welcome");
};

export const gameStartAnnouncement = function (name) {
  playersView.renderEvents(`🙋‍♀️ ${name} a choisi de jouer en premier`, "player-change");
};

export const firstShotAnnouncement = function (name, direction) {
  playersView.renderEvents(`🙋‍♀️ ${name} commence le jeu en faisant un ya vers la ${direction}`, "event");
};

export const virtualPlayerShotAnnouncement = function (name, shot) {
  playersView.renderEvents(`🙆 ${name} a choisi de faire un ${shot}`, "event");
};

export const virtualPlayerMistakeWarning = function (name, shot) {
  playersView.renderEvents(`🤦‍♂️ ${name} a lamentablement échoué dans sa tentative de faire un ${shot}`, "warning");
};

export const virtualPlayerEliminationAnnouncement = function (name) {
  playersView.renderEvents(`🤷‍♀️ ${name} a commis une erreur et est éliminé`, "elimination");
};

export const drawHumanPlayerAttention = function () {
  playersView.renderEvents("🤯 C'est à votre tour de jouer", "attention");
};

export const playerChangeAnnouncement = function (name) {
  playersView.renderEvents(`😱 C'est donc au tour de ${name} de jouer. Que va-t-il se passer ?`, "player-change");
};

export const virtualPlayerNoiseAnnouncement = function (name, noise) {
  playersView.renderEvents(`👍🏻 ${name} a réussi à dire ${noise}`, "validate");
};

export const playerHavingToDesignateAnotherPlayerAnnouncement = function (name) {
  playersView.renderEvents(`${name} doit désormais appeler un nouveau joueur pour continuer le jeu`, "event");
};

export const chosenPlayerNameAnnoucement = function (playerToCallName, playerCalledName, noise) {
  playersView.renderEvents(`${playerToCallName} a appelé ${playerCalledName} après avoir dit ${noise}`, "event");
};

export const zapAnnouncement = function (playerZappingName, playerZappedName) {
  playersView.renderEvents(`${playerZappingName} a choisi de zapper ${playerZappedName}`, "event");
};

export const zapFailAnnouncement = function (playerZappedName, playerZappingName) {
  playersView.renderEvents(
    `${playerZappedName} a été zappé par ${playerZappingName} alors qu'il avait déjà été zappé`,
    "warning"
  );
};

export const lastZapOkAnnouncement = function (lastPlayerToZapName, firstPlayerToZapName) {
  playersView.renderEvents(
    `👍🏻 ${lastPlayerToZapName} a réussi à zapper le premier joueur à avoir zappé : ${firstPlayerToZapName}`,
    "validate"
  );
  playersView.renderEvents(`🙋‍♀️ C'est donc à ${firstPlayerToZapName} de reprendre le jeu`, "event");
};

export const lastZapFailAnnouncement = function (lastPlayerToZapName, firstPlayerToZapName, playerActuallyZappedName) {
  playersView.renderEvents(
    `👩🏼‍🦯 ${lastPlayerToZapName} n'a pas réussi à zapper le premier joueur à avoir zappé : ${firstPlayerToZapName} puisqu'il a zappé ${playerActuallyZappedName}`,
    "warning"
  );
};

export const serviceMessage = function (string, type = "event") {
  playersView.renderEvents(string, type);
};

export const humanPlayerValidation = function (shot) {
  playersView.renderEvents(`🐵 Vous avez réussi à faire ${shot}`, "validate");
};

export const humanPlayerMistakewarning = function (shot) {
  playersView.renderEvents(`🙈 Vous n'avez pas réussi à faire ${shot}`, "warning");
};

export const humanTypingMistake = function (key) {
  playersView.renderEvents(`🐙 Vous avez fait une erreur et pressé la touche ${key}`, "warning");
};
