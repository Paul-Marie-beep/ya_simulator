class buttonsView {
  _commandPanel = document.querySelector(".commands");

  showShotsCommands() {
    this._commandPanel.innerHTML =
      "<p>Appuyez sur la flèche qui va dans le sens du jeu sur votre clavier</p><p>Ou appuyez sur la touche H pour faire un 'Hold Down'</p><p>Ou appuyez sur la touche O pour faire Honky Tonk</p><p>Ou appuyez sur la touche A pour faire Ahi</p><p>Ou appuyez sur L pour 'Je laisse'</p><p>Ou appuyez sur V pour 'Vade Retro'</p>";
  }

  showHonkyTonkCommands() {
    this._commandPanel.innerHTML = "<p>Appuyez sur la touche B pour faire 'Houba Houba'</p>";
  }

  showVadeRetroCommands(saying) {
    this._commandPanel.innerHTML = `<p>Vous devez dire ${saying}</p></br><p>Appuyez sur la touche S pour dire Sa</br>Appuyez sur la touche T pour dire Ta</br>Appuyez sur la touche N pour dire Nas</p>`;
  }

  showCallNewPlayerCommands() {
    this._commandPanel.innerHTML =
      "<p>Cliquez sur le nom d'un joueur pour lui indiquer que c'est à lui de continuer à jouer";
  }

  ShowNameCalledCommands(noise) {
    this._commandPanel.innerHTML = `<p>Appuyez sur D pour dire ${noise}</p>`;
  }

  showLetCommands() {
    this._commandPanel.innerHTML =
      "<p> Si vous avez envie de prendre : appuyez sur P pour dire 'Je prends'</p><p>Sinon, n'appuyez sur aucune touche</p>";
  }

  showZapCommands() {
    this._commandPanel.innerHTML = "<p>Cliquez sur le nom d'un joueur pour le zapper</p>";
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

  handlePlayerResponseToVadeRetro(handler) {
    //We want to see if the human player has pressed the right key
    const insideListener = function (event) {
      console.log(event.key);
      console.log("le joueur a pressé la touche :", event.key);
      handler(event.key);
      document.removeEventListener("keydown", insideListener);
    };
    document.addEventListener("keydown", insideListener);
  }

  // Erases the orders given to the player
  clearCommands() {
    this._commandPanel.innerHTML = "";
  }

  // Function to handle the input of the human player regarding which shot he intends to play
  handlePlayerResponseToShot(handler) {
    //We want the key that has has been pressed to go back to the controller
    const insideListener = function (event) {
      console.log("le joueur a pressé la touche :", event.key);
      handler(event.key);
      document.removeEventListener("keydown", insideListener);
    };
    document.addEventListener("keydown", insideListener);
  }

  // This function deals with the reaction of the human player when his name is called after houba houba
  handlePlayerResponseToCall(handler, noise) {
    const insideListener = function (event) {
      if (event.key === "d") {
        console.log("Le joueur a pressé la bonne touche");
        handler(true, noise);
        document.removeEventListener("keydown", insideListener);
      } else {
        console.log("Le joueur n'a pas pressé la bonne touche");
        handler(false, noise);
        document.removeEventListener("keydown", insideListener);
      }
    };
    document.addEventListener("keydown", insideListener);
  }

  handlePlayerResponseToLet(handler, reactionTime) {
    console.log("test reaction time", reactionTime);
    const insideListener = function (event) {
      console.log(`Le joueur a appuyé sur la touche ${event.key}`);
      handler(event.key);
      document.removeEventListener("keydown", insideListener);
    };
    document.addEventListener("keydown", insideListener);
    setTimeout(() => {
      document.removeEventListener("keydown", insideListener);
    }, reactionTime);
  }
}

export default new buttonsView();
