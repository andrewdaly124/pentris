import PIECES from "./static/pieces";
import Fall from "./logic/fall";

import { setCurrentPiece, resetCurrentLocation } from "../store/actions";
import store from "../store";
import Place from "./logic/place";

async function initGame() {
  while (true /* fixme */) {
    // Find next piece
    const randomIndex = Math.floor(Math.random() * PIECES.length);
    const currentPiece = PIECES[randomIndex];
    store.dispatch(setCurrentPiece(currentPiece));

    /**
     *
     * 1. Get new piece from static
     *
     * 2. spawn at the top of the screen
     *
     * 3. in a while loop, decrement location until it hits something, then place
     */

    await Fall();
    Place();
    store.dispatch(resetCurrentLocation());
  }
}

export default initGame;
