"use strict";

import { lookForPlayersReactingToVadeRetro, chooseRandomPlayer } from "../model";
import { hitOrMissHonkyTonk } from "../helpers";
import { dringManagement } from "./honkyController";
import { mistakesWereMade } from "./gameController";
import { humanResponseToVadeRetro } from "./buttonsController";

export let playersToSatanas;

const whoWillSatanas = function () {
  return lookForPlayersReactingToVadeRetro();
};

export const relaunchGameAfterVadeRetro = function (playerToCallANewPlayer) {
  console.log(`${playerToCallANewPlayer.name} doit désormais désigner quelqu'un pour devenir le nouveau joueur`);

  // A player is randomly selected
  const newPlayer = chooseRandomPlayer();
  console.log(`${playerToCallANewPlayer.name} a appelé ${newPlayer.name} après avoir dit "Ta"`);

  // We then test if the new player has successfully reacted by saying "Dring"
  dringManagement(newPlayer, "Je brûle");
};

const reactionsToVadeRetro = function (playersReactingToVadeRetro) {
  //Case when one of the player involved is human
  if (
    playersReactingToVadeRetro[0].human ||
    playersReactingToVadeRetro[1].human ||
    playersReactingToVadeRetro[2].human
  ) {
    const virtualPlayersReactingToVadeRetro = playersReactingToVadeRetro.filter((player) => player.human === false);
    const hasAnyVirtualPlayerFailedToSatanas = false;
    if (
      hitOrMissHonkyTonk(virtualPlayersReactingToVadeRetro[0], "Houba Houba") ||
      hitOrMissHonkyTonk(virtualPlayersReactingToVadeRetro[1], "Houba Houba")
    ) {
      hasAnyVirtualPlayerFailedToSatanas = true;
    }
    console.log("Attention, on a un humain dans l'histoire qui doit réagit à Vade Retro");
    humanResponseToVadeRetro();
  } else {
    // Case where none of the players who have to say houba houba are human

    // sa, ta and nas are booleans that tell us if the virtual player has successfully reacted to the honky tonk situation
    // the booleans are true if a mistake has been committed and false otherwise
    const sa = hitOrMissHonkyTonk(playersReactingToVadeRetro[0], "Sa");
    const ta = hitOrMissHonkyTonk(playersReactingToVadeRetro[1], "Ta");
    const nas = hitOrMissHonkyTonk(playersReactingToVadeRetro[2], "Nas");

    // If the three players involved have committed a mistake, they are all eliminated
    if (sa && ta && nas) {
      mistakesWereMade(playersReactingToVadeRetro[0]);
      mistakesWereMade(playersReactingToVadeRetro[1]);
      mistakesWereMade(playersReactingToVadeRetro[2]);
    } else if (!sa && !ta && !nas) {
      // case where all three players are succesful, we must relaunch the game by calling another player
      console.log(
        `${playersReactingToVadeRetro[0].name} a réussi a faire "Sa", ${playersReactingToVadeRetro[1].name} a réussi a faire "Ta" et ${playersReactingToVadeRetro[2].name} a réussi a faire "Nas"`
      );
      relaunchGameAfterVadeRetro(playersReactingToVadeRetro[1]);
    } else if (sa && !ta && !nas) {
      // The first player has not been succesful but the other two have
      console.log(
        `${playersReactingToVadeRetro[0].name} n'a pas réussi a faire "Sa" mais ${playersReactingToVadeRetro[1].name} a réussi a faire "Ta" et ${playersReactingToVadeRetro[2].name} a réussi a faire "Nas"`
      );
      // Since a mistake has been committed, the elimination of the first player is triggered
      mistakesWereMade(playersReactingToVadeRetro[0]);
    } else if (!sa && ta && !nas) {
      // The second player has not been succesful but the other two have
      console.log(
        `${playersReactingToVadeRetro[1].name} n'a pas réussi a faire "Ta" mais ${playersReactingToVadeRetro[0].name} a réussi a faire "Sa" et ${playersReactingToVadeRetro[2].name} a réussi a faire "Nas"`
      );
      // Since a mistake has been committed, the elimination of the first player is triggered
      mistakesWereMade(playersReactingToVadeRetro[1]);
    } else if (!sa && !ta && nas) {
      // The third player has not been succesful but the other two have
      console.log(
        `${playersReactingToVadeRetro[2].name} n'a pas réussi a faire "Nas" mais ${playersReactingToVadeRetro[0].name} a réussi a faire "Sa" et ${playersReactingToVadeRetro[1].name} a réussi a faire "Ta"`
      );
      // Since a mistake has been committed, the elimination of the first player is triggered
      mistakesWereMade(playersReactingToVadeRetro[2]);
    }
  }
};

export const vadeRetroByVirtualPlayer = function () {
  // First we want to understand who are the players who will have to react to the vade retro shot
  playersToSatanas = whoWillSatanas();
  console.log("👁️ Voici les joueurs qui vont devoir faire Sa Ta Nas :", playersToSatanas);

  // Then we check if the virtual players involved managed to do Houba Houba
  reactionsToVadeRetro(playersToSatanas);
};
