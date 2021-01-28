import { setClearedRows, setScore, setBoardMap } from "../../store/actions";
import { getBoardMap, getCurrentPiece, getScore } from "../../store/selectors";
import store from "../../store";
import { GetNewPosition } from "./move";
import { EVALUATE_DELAY } from "../../constants";

const SCORE_BY_ROWS_CLEARED = [400, 1000, 3000, 12000, 40000];

/**
 * Set boardMap entries to populated where the current
 * piece resides
 */
export default function Place() {
  // Array copy as to not directly alter state
  const boardMap = [...getBoardMap(store.getState())];
  const placeLocation = GetNewPosition();
  const currentPiece = getCurrentPiece(store.getState());
  for (let i = 0; i < placeLocation.length; i++) {
    const block = placeLocation[i];
    boardMap[block[0]][block[1]].populated = true;
    boardMap[block[0]][block[1]].color = currentPiece.color;
  }
  store.dispatch(setBoardMap(boardMap));
}

/**
 * Evaluate any cleared lines:
 *
 * 1. Checks for cleared rows, if none, return normally
 * 2. If rows are cleared, push cleared rows to store and
 *    delete rows after `EVALUATION_DELAY` ms
 * 3. Then empty rows from store and increment score
 */
export async function Evaluate() {
  const boardMap = getBoardMap(store.getState());
  const placeLocation = GetNewPosition();

  function IsRowFilled(row) {
    for (let i = 0; i < boardMap.length; i++) {
      if (!boardMap[i][row].populated) {
        return false;
      }
    }
    return true;
  }

  // Assign filled rows, using a hash to not check the same row twice
  const affectedRows = {};
  let anyRowFilled = false;
  const clearedRows = [];
  placeLocation.forEach((coordinate) => {
    if (!affectedRows[coordinate[1]]) {
      const filled = IsRowFilled(coordinate[1]);
      affectedRows[coordinate[1]] = filled;
      if (filled) {
        anyRowFilled = true;
        clearedRows.push(coordinate[1]);
      }
    }
  });

  // Nothing happened, regular block placement
  if (!anyRowFilled) {
    return;
  }

  // Tells UI to flash cleared rows
  store.dispatch(setClearedRows(clearedRows));

  clearedRows.sort(); // Sort so that this algorithm for row deletion always works
  await new Promise((resolve) => {
    setTimeout(() => {
      // Delete rows - clear from bottom up, unshift a new empty node
      clearedRows.forEach((rowKey) => {
        for (let i = 0; i < boardMap.length; i++) {
          boardMap[i].splice(rowKey, 1);
          boardMap[i].unshift({ populated: false, color: 0 });
        }
      });
      resolve();
    }, EVALUATE_DELAY);
  });

  // Clear flashing rows in UI, increment score
  store.dispatch(setClearedRows([]));
  store.dispatch(
    setScore(
      getScore(store.getState()) +
        SCORE_BY_ROWS_CLEARED[clearedRows?.length - 1]
    )
  );
}
