import Delay from "../../utils/delay";
import {
  getCurrentLocation,
  getBoardHeight,
  getCurrentFallDelta,
} from "../../store/selectors";
import store from "../../store";
import Move from "./move";

/**
 * Fall controller:
 *
 * This will run until the current piece collides with
 * the bottom edge of the screen or another populated block
 */
export default async function Fall() {
  const boardHeight = getBoardHeight(store.getState());
  let fallDelta = getCurrentFallDelta(store.getState());
  let pieceLocation;

  do {
    // Assign every time in case of soft dropping
    fallDelta = getCurrentFallDelta(store.getState());
    await Delay(fallDelta);
    pieceLocation = getCurrentLocation(store.getState());
    // Try moving down, if we can't, then break loop
    if (!Move("down")) {
      break;
    }
  } while (pieceLocation[1] < boardHeight);
}
