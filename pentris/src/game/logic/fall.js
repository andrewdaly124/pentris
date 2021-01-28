import Delay from "../../utils/delay";
import { setCurrentLocation } from "../../store/actions";
import {
  getCurrentLocation,
  getBoardHeight,
  getCurrentFallDelta,
} from "../../store/selectors";
import store from "../../store";

import GetNewPosition from "./new_position";
import Intersects from "./intersect";

export default async function Fall() {
  const boardHeight = getBoardHeight(store.getState());
  let fallDelta = getCurrentFallDelta(store.getState());
  let pieceLocation;

  do {
    fallDelta = getCurrentFallDelta(store.getState());
    await Delay(fallDelta);
    pieceLocation = getCurrentLocation(store.getState());
    if (!Intersects(GetNewPosition(0, 1))) {
      store.dispatch(
        setCurrentLocation([pieceLocation[0], pieceLocation[1] + 1])
      );
    } else {
      break;
    }
  } while (pieceLocation[1] < boardHeight);
}
