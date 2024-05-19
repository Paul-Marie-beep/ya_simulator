import { initializeGame } from "./gameController";
import welcomeView from "../views/welcomeView";

export const waitForStartInput = function () {
  welcomeView.waitForStart(initializeGame);
};
