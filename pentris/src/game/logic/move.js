import GetNewPosition from "./new_position";
import Intersects from "./intersect";

import { setCurrentLocation } from "../../store/actions";
import { getCurrentLocation } from "../../store/selectors";
import store from "../../store";

export default function Move(direction) {
  const pieceLocation = getCurrentLocation(store.getState());
  switch (direction) {
    case "left":
      if (!Intersects(GetNewPosition(-1, 0))) {
        store.dispatch(
          setCurrentLocation([pieceLocation[0] - 1, pieceLocation[1]])
        );
      }
      break;
    case "right":
      if (!Intersects(GetNewPosition(1, 0))) {
        store.dispatch(
          setCurrentLocation([pieceLocation[0] + 1, pieceLocation[1]])
        );
      }
      break;
    default:
  }
}
