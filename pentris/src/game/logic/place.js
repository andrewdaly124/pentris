import { setClearedRows, setScore } from "../../store/actions";
import { getBoardMap, getCurrentPiece, getScore } from "../../store/selectors";
import store from "../../store";

import { GetNewPosition } from "./move";

import { EVALUATE_DELAY } from "../../constants";

const SCORE_BY_ROWS_CLEARED = [400, 1000, 3000, 12000, 40000];

export default function Place() {
  const boardMap = getBoardMap(store.getState());
  const placeLocation = GetNewPosition();
  const currentPiece = getCurrentPiece(store.getState());
  for (let i = 0; i < placeLocation.length; i++) {
    const block = placeLocation[i];
    boardMap[block[0]][block[1]].populated = true;
    boardMap[block[0]][block[1]].color = currentPiece.color;
  }
}

export async function Evaluate() {
  const boardMap = getBoardMap(store.getState());
  const placeLocation = GetNewPosition();
  const affectedRows = {};

  function IsRowFilled(row) {
    for (let i = 0; i < boardMap.length; i++) {
      if (!boardMap[i][row].populated) {
        return false;
      }
    }
    return true;
  }

  let anyRowFilled = false;
  const clearedRows = [];
  // Assign filled rows
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

  if (!anyRowFilled) {
    return;
  }

  store.dispatch(setClearedRows(clearedRows));
  clearedRows.sort();
  await new Promise((resolve) => {
    setTimeout(() => {
      // Delete rows
      clearedRows.forEach((rowKey) => {
        for (let i = 0; i < boardMap.length; i++) {
          boardMap[i].splice(rowKey, 1);
          boardMap[i].unshift({ populated: false, color: 0 });
        }
      });
      resolve();
    }, EVALUATE_DELAY);
  });

  const currentScore = getScore(store.getState());
  const scoreBoost = SCORE_BY_ROWS_CLEARED[clearedRows?.length - 1];
  store.dispatch(setClearedRows([]));
  store.dispatch(setScore(currentScore + scoreBoost));
}
