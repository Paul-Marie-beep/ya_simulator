import * as model from "./model";
import playersView from "./views/playersView";

if (module.hot) {
  module.hot.accept();
}

playersView.renderPlayers(model.currentPlayers);

model.chooseFirstPlayer();
const firstYa = model.firstPlayerLaunchGame();
const graphRep = model.firstYa;
