import PIECES from "./static/pieces";
import Delay from "./utils/delay";

import { setCurrentPiece } from "../store/actions";
import { getCurrentFallDelta } from "../store/selectors";
import store from "../store";

async function initGame() {
  while (true /* fixme */) {
    // Find next piece
    const randomIndex = Math.floor(Math.random() * PIECES.length);
    const currentPiece = PIECES[randomIndex];
    store.dispatch(setCurrentPiece(currentPiece));

    const fallDelta = getCurrentFallDelta(store.getState());

    /**
     *
     * 1. Get new piece from static
     *
     * 2. spawn at the top of the screen
     *
     * 3. in a while loop, decrement location until it hits something, then place
     */

    await Delay(fallDelta);
    console.log(currentPiece.name);
  }
}

export default initGame;
