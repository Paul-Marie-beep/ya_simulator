class welcomeView {
  waitForStart(handler) {
    // We do not want the form to be emptied is someone presses enter
    const preventSubmissionByPressingEnter = function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    };

    const insideListener = function () {
      const humanPlayerName = document.querySelector(".form__input").value;

      // Guard to check that a name has actually been typed
      if (humanPlayerName === "") {
        alert("On t'a demandé d'écrire ton nom, abruti !!");
        return;
      }

      // Send the name back to the controller for the game to start with this information
      handler(humanPlayerName);
      //Hide the welcome popup
      document.querySelector(".popup-welcome").style.display = "none";
      document.querySelector(".start__button").removeEventListener("click", insideListener);
      document.querySelector(".form").removeEventListener("keydown", preventSubmissionByPressingEnter);
    };

    document.querySelector(".form").addEventListener("keydown", preventSubmissionByPressingEnter);
    document.querySelector(".start__button").addEventListener("click", insideListener);
  }
}

export default new welcomeView();
