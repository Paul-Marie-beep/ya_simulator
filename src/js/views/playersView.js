class playersView {
  _playerBox = document.querySelector(".player_grid");
  renderPlayers(currentPlayers) {
    console.log("currentPlayers", currentPlayers);
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
    this._playerBox.innerHTML = html;
  }
}

export default new playersView();
