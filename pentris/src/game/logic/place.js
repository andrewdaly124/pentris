import { getBoardMap, getCurrentPiece } from "../../store/selectors";
import store from "../../store";

import { GetNewPosition } from "./move";

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
