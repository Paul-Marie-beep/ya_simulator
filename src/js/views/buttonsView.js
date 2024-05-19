class buttonsView {
  _commandPanel = document.querySelector(".commands__contextual");

  showShotsCommands() {
    this._commandPanel.innerHTML =
      "<p>C'est à votre tour de jouer</p><p>Appuyez sur Entrée pour découvrir les différentes commandes</p>";
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

  handlePlayerResponseToHonkyTonk(handler, playersReactingToHonkyTonk) {
    //We want to see if the human player has pressed the right key
    const insideListener = function (event) {
      console.log(event.key);
      handler(event.key, playersReactingToHonkyTonk);
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
    const insideKeyListener = function (event) {
      // Guard to prevent the function to be triggered if the player only want to see the commands
      if (event.key === "Enter") return;

      console.log("le joueur a pressé la touche :", event.key);
      handler(event.key, "key");
      document.removeEventListener("keydown", insideKeyListener);
      document.querySelector(".wrapper").removeEventListener("click", insideClickListener);
    };
    // We want the name of the player that's been zapped to go back to the controller
    const insideClickListener = function (event) {
      event.preventDefault();
      if (event.target.classList.contains("player")) {
        handler(event.target.dataset.name, "click");
        document.querySelector(".wrapper").removeEventListener("click", insideClickListener);
        document.removeEventListener("keydown", insideKeyListener);
      }
      //If the click is not on the name but on the ball, we still want the name of player to be sent back to the controller
      if (event.target.classList.contains("child")) {
        handler(event.target.parentNode.dataset.name, "click");
        document.querySelector(".wrapper").removeEventListener("click", insideClickListener);
        document.removeEventListener("keydown", insideKeyListener);
      }
    };
    document.addEventListener("keydown", insideKeyListener);
    document.querySelector(".wrapper").addEventListener("click", insideClickListener);
  }

  // This function deals with the reaction of the human player when his name is called after houba houba
  handlePlayerResponseToCall(handler, noise) {
    const insideListener = function (event) {
      // Guard to prevent the function to be triggered if the player only want to see the commands
      if (event.key === "Enter") return;

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
      // Guard to prevent the function to be triggered if the player only want to see the commands
      if (event.key === "Enter") return;

      console.log(`Le joueur a appuyé sur la touche ${event.key}`);
      handler(event.key);
      document.removeEventListener("keydown", insideListener);
    };
    document.addEventListener("keydown", insideListener);
    setTimeout(() => {
      document.removeEventListener("keydown", insideListener);
    }, reactionTime);
  }

  showCommandsToPlayer() {
    // This function makes sure that the popup will not be visible any more when the exit button is clicked on
    const insideInsideListener = function (event) {
      if (event.target.classList.contains("exit-button")) {
        document.querySelector(".popup-instructions").style.display = "none";
        document.removeEventListener("click", insideInsideListener);
      }
    };

    const insideListener = function (event) {
      console.log(`Le joueur a appuyé sur la touche ${event.key}`);
      // If the human player presses enter, he shall be shown the commands
      if (event.key === "Enter") {
        document.querySelector(".popup-instructions").style.display = "flex";
        document.addEventListener("click", insideInsideListener);
      }
    };
    document.addEventListener("keydown", insideListener);
  }
}

export default new buttonsView();
