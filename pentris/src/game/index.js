import {
  setCurrentPiece,
  resetCurrentLocation,
  gameOver,
  clearGame,
} from "../store/actions";
import { getBoardMap, getGameOver } from "../store/selectors";
import store from "../store";
import PIECES from "./static/pieces";
import Fall from "./logic/fall";
import End from "./logic/end";
import Move, { GetNewPosition } from "./logic/move";
import Place, { Evaluate } from "./logic/place";

import Intersects from "./logic/intersects";
import Delay from "../utils/delay";

async function initGame() {
  let randomIndex = Math.floor(Math.random() * PIECES.length);
  let nextPiece = PIECES[randomIndex];
  let gameOverDelay = false;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const currentPiece = nextPiece;
    // Find next piece
    let nextIndex = Math.floor(Math.random() * PIECES.length);
    while (nextIndex === randomIndex) {
      nextIndex = Math.floor(Math.random() * PIECES.length);
    }
    randomIndex = nextIndex;
    nextPiece = PIECES[randomIndex];
    store.dispatch(
      setCurrentPiece({ pieces: currentPiece.pieces, color: randomIndex % 3 })
    );

    // For tiles <= 3 in height
    // TODO: Dynamically calculate starting position
    Move("up");
    Move("up");

    if (getBoardMap(store.getState()).length && Intersects(GetNewPosition())) {
      Place(); // Show user the new piece intersects tower
      await End();
      gameOverDelay = true;
      store.dispatch(gameOver(true));
    } else {
      await Fall();
      Place();
      await Evaluate();
    }
    store.dispatch(resetCurrentLocation());

    // TODO: Make this a saga middleware
    while (getGameOver(store.getState())) {
      await Delay(50);
    }

    if (gameOverDelay) {
      await Delay(1200); // 1.2s till new game starts
      store.dispatch(clearGame());
      gameOverDelay = false;
    }
  }
}

export default initGame;
