class playersView {
  _playerGrid = document.querySelector(".player_grid");
  renderPlayers(currentPlayers) {
    console.log("currentPlayers", currentPlayers);
    console.log("player grid", this._playerGrid);

    let html = "";
    currentPlayers.forEach((el) => {
      html =
        html +
        `
      <div data-index=${currentPlayers.indexOf(el)} class="player">
          <div class="player__ball"></div>
          <div class="player__name">${el.name}</div>
        </div>
      `;
    });
    this._playerGrid.innerHTML = html;
  }
}

export default new playersView();
