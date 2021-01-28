import PIECES from "./static/pieces";
import Fall from "./logic/fall";

import { setCurrentPiece, resetCurrentLocation } from "../store/actions";
import store from "../store";
import Place from "./logic/place";

async function initGame() {
  let randomIndex = Math.floor(Math.random() * PIECES.length);
  let nextPiece = PIECES[randomIndex];
  while (true /* fixme */) {
    const currentPiece = nextPiece;
    // Find next piece
    let nextIndex = Math.floor(Math.random() * PIECES.length);
    while (nextIndex === randomIndex) {
      nextIndex = Math.floor(Math.random() * PIECES.length);
    }
    randomIndex = nextIndex;
    nextPiece = PIECES[nextIndex];
    store.dispatch(
      setCurrentPiece({ pieces: currentPiece.pieces, color: randomIndex % 3 })
    );

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
