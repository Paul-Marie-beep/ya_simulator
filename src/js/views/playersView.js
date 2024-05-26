class playersView {
  _playerGrid = "";
  __eventsDisplay = document.querySelector(".wrapper__tell");

  highlightActivePlayer(currentPlayer) {
    document.querySelectorAll(".player__ball").forEach((div) => {
      div.classList.remove("active");
    });
    document.querySelector(`.player__ball--${currentPlayer.numero}`).classList.add("active");
  }

  renderPlayers(currentPlayers) {
    this._playerGrid = document.querySelector(".wrapper__show");

    let html = "";

    // The order of the elements of the array is reversed so that the graphical representation matches what happens in the model
    const reversedArray = [];
    currentPlayers.forEach((el) => {
      reversedArray.push(el);
    });

    reversedArray.reverse().forEach((el, i) => {
      html =
        html +
        `
      <div data-name=${el.name} class="player player--${i + 1}">
          <div class="child player__ball player__ball--${el.numero}"></div>
          <div class="child player__name">${el.name}</div>
        </div>
      `;
    });
    this._playerGrid.innerHTML = html;
  }

  renderEvents(eventDescription, type) {
    const html = `<p class= "wrapper__tell--${type}" >${eventDescription}</p>`;
    this.__eventsDisplay.insertAdjacentHTML("afterbegin", html);
  }

  eraseEvents() {
    this.__eventsDisplay.innerHTML = "";
  }

  handleHumanChoiceOfANewPlayer(handler, shot) {
    //We want the human player to click on the new player with which he want to continue the game
    // We then want this view to return the name of the player who should carry on playing to the controller
    //We also add an event listener for the key strokes in caxe there is a mistake.

    const insideListenerKey = function (event) {
      event.preventDefault();
      if (event.key === "p") {
        handler("take");
      } else {
        handler("mistake");
      }
      document.querySelector(".wrapper__show").removeEventListener("click", insideListenerClick);
      document.removeEventListener("keydown", insideListenerKey);
    };

    const insideListenerClick = function (event) {
      event.preventDefault();
      if (event.target.classList.contains("player")) {
        handler(event.target.dataset.name, shot);
        document.querySelector(".wrapper__show").removeEventListener("click", insideListenerClick);
        document.removeEventListener("keydown", insideListenerKey);
      }
      //If the click is not on the name but on the ball, we still want the name of player to be sent back to the controller
      if (event.target.classList.contains("child")) {
        handler(event.target.parentNode.dataset.name, shot);
        document.querySelector(".wrapper__show").removeEventListener("click", insideListenerClick);
        document.removeEventListener("keydown", insideListenerKey);
      }
    };
    document.querySelector(".wrapper__show").addEventListener("click", insideListenerClick);
    document.addEventListener("keydown", insideListenerKey);
  }
}

export default new playersView();
