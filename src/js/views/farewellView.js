class farewellView {
  constructor() {
    this.defeatPopup = document.querySelector(".popup-endgame--defeat");
    this.victoryPopup = document.querySelector(".popup-endgame--victory");
    this.overlay = document.querySelector(".overlay");
    this.handleClick = this.handleClick.bind(this);
  }

  addOverlay() {
    this.overlay.style.display = "flex";
  }

  removeOverlay() {
    this.overlay.style.display = "none";
  }

  showDefeatPopup() {
    this.defeatPopup.style.display = "flex";
    this.addOverlay();
  }

  hideDefeatPopup() {
    this.defeatPopup.style.display = "none";
    this.removeOverlay();
  }

  showVictoryPopup() {
    this.victoryPopup.style.display = "flex";
    this.addOverlay();
  }

  hideVictoryPopup() {
    this.victoryPopup.style.display = "none";
    this.removeOverlay();
  }

  handleClick(event, handler) {
    console.log("event target", event.target);
    if (event.target.classList.contains("start-again-button")) {
      console.log("🦄🦄🦄 Le bouton a été pressé");
      // We want to close the right popup
      if (event.target.id === "start-again-button-after-defeat") {
        this.hideDefeatPopup();
      }
      if (event.target.id === "start-again-button-after-victory") {
        this.hideVictoryPopup();
      }
      document.removeEventListener("click", this.insideListener);
      handler();
    }
  }

  handleStartAgainDecision(handler) {
    this.insideListener = (event) => this.handleClick(event, handler);
    document.addEventListener("click", this.insideListener);
    // by clicking on a button, the human player will start another game.
  }

  StartAgainDecisionHandled() {
    console.log("trig remover event listener");
  }
}

export default new farewellView();
