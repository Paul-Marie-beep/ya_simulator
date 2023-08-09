class buttonsView {
  _commandPanel = document.querySelector(".commands");

  showShotsCommands() {
    this._commandPanel.innerHTML =
      "<p>Appuyez sur la flèche qui va dans le sens du jeu sur votre clavier</p><p>Ou appuyez sur la touche H pour faire un 'Hold Down'</p><p>Ou appuyez sur truc pour faire Honky Tonk";
  }

  showHonkyTonkCommands() {
    this._commandPanel.innerHTML = "<p>Appuyez sur la touche B pour faire 'Houba Houba'</p>";
  }

  showCallNewPlayerCommands() {
    this._commandPanel.innerHTML =
      "<p>Cliquez sur le nom d'un joueur pour lui indiquer que c'est à lui de continuer à jouer";
  }

  handlePlayerResponseToHonkyTonk(handler) {
    //We want to see if the human player has pressed the right key
    const insideListener = function (event) {
      console.log(event.key);
      handler(event.key);
      document.removeEventListener("keydown", insideListener);
    };
    document.addEventListener("keydown", insideListener);
  }

  clearCommands() {
    this._commandPanel.innerHTML = "";
  }

  handlePlayerResponseToShot(handler) {
    //We want the key that has has been pressed to go back to the controller
    console.log("handlePlayerResponseToYa triggered");
    const insideListener = function (event) {
      if (event.key === "ArrowLeft") {
        console.log(event.key);
        handler("left");
        document.removeEventListener("keydown", insideListener);
      }
      if (event.key === "ArrowRight") {
        console.log(event.key);
        handler("right");
        document.removeEventListener("keydown", insideListener);
      }
      if (event.key === "h") {
        console.log(event.key);
        handler("h");
        document.removeEventListener("keydown", insideListener);
      }
    };
    document.addEventListener("keydown", insideListener);
  }
}

export default new buttonsView();
