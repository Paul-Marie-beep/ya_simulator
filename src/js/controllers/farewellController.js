import farewellView from "../views/farewellView";
import { initializeGame } from "./gameController";

export const endGamebyDefeat = function () {
  farewellView.showDefeatPopup();
  farewellView.handleStartAgainDecision(startAgain);
};

export const endGameByVictory = function () {
  farewellView.showVictoryPopup();
  farewellView.handleStartAgainDecision(startAgain);
};

export const startAgain = function () {
  console.log("trig appui sur le bouton 'Start Again'");
  initializeGame();
};
