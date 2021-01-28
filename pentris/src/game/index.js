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
import { RESULTS_TRANSITION } from "../constants";

/**
 * Game logic
 */
async function initGame() {
  let randomIndex = Math.floor(Math.random() * PIECES.length);
  let nextPiece = PIECES[randomIndex];
  let gameOverDelay = false;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // Set current piece
    const currentPiece = nextPiece;
    store.dispatch(
      setCurrentPiece({ pieces: currentPiece.pieces, color: randomIndex % 3 })
    );

    // Find next piece such that it is not the same as this piece
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * PIECES.length);
    } while (nextIndex === randomIndex);
    randomIndex = nextIndex;
    nextPiece = PIECES[randomIndex];

    // For tiles <= 3 in height, move to top of viewport before starting turn
    // TODO: Dynamically calculate starting position
    Move("up");
    Move("up");

    if (getBoardMap(store.getState()).length && Intersects(GetNewPosition())) {
      // Game over - place current picec and show end game animation
      Place(); // Show user the new piece intersects tower
      await End();
      gameOverDelay = true;
      store.dispatch(gameOver(true));
    } else {
      // Wait for piece to fall, then place, then check for cleared lines
      await Fall();
      Place();
      await Evaluate();
    }
    store.dispatch(resetCurrentLocation());

    // TODO: Make this a saga middleware
    while (getGameOver(store.getState())) {
      // Poll to end game over state
      await Delay(50);
    }

    // Wait for results screen to vanish
    if (gameOverDelay) {
      await Delay(RESULTS_TRANSITION); // 1.0s till new game starts
      store.dispatch(clearGame());
      gameOverDelay = false;
    }
  }
}

export default initGame;
