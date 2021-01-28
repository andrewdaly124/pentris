import { setBoardMap, setCurrentPiece } from "../../store/actions";
import { getBoardMap } from "../../store/selectors";
import store from "../../store";

const ROW_DELETE_DELAY = 50;

/**
 * Endgame animation:
 *
 * One at a time, each row will empty itself until reaching the top
 */
export default async function End() {
  const boardMap = getBoardMap(store.getState());
  // Set current piece to empty
  store.dispatch(setCurrentPiece({ pieces: [], name: "" }));

  for (let i = boardMap[0]?.length - 1; i >= 0; i--) {
    // For each row starting from the lowest, remove one at a time
    await new Promise((resolve) => {
      setTimeout(() => {
        for (let j = 0; j < boardMap?.length; j++) {
          boardMap[j][i] = { populated: false, color: 0 };
        }
        // Dispatch needed to update populated board
        store.dispatch(setBoardMap(boardMap));
        resolve();
      }, ROW_DELETE_DELAY);
    });
  }
}
