import { getBoardMap } from "../../store/selectors";
import store from "../../store";

import GetNewPosition from "./new_position";

export default function Place() {
  const boardMap = getBoardMap(store.getState());
  const placeLocation = GetNewPosition();
  for (let i = 0; i < placeLocation.length; i++) {
    const block = placeLocation[i];
    boardMap[block[0]][block[1]].populated = true;
  }
}
