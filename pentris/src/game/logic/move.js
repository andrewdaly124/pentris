import Intersects from "./intersects";

import { setCurrentLocation } from "../../store/actions";
import { getCurrentLocation, getCurrentPiece } from "../../store/selectors";
import store from "../../store";

export function GetNewPosition(x = 0, y = 0, position = null) {
  const currentLocation = getCurrentLocation(store.getState());
  const currentPieceBlocks =
    position || getCurrentPiece(store.getState()).pieces;

  const newLocation = [];
  for (let i = 0; i < currentPieceBlocks.length; i++) {
    newLocation.push([
      currentPieceBlocks[i][0] + currentLocation[0] + x,
      currentPieceBlocks[i][1] + currentLocation[1] + y,
    ]);
  }
  return newLocation;
}

export default function Move(direction) {
  const pieceLocation = getCurrentLocation(store.getState());
  function TryMoving(x = 0, y = 0) {
    if (!Intersects(GetNewPosition(x, y))) {
      store.dispatch(
        setCurrentLocation([pieceLocation[0] + x, pieceLocation[1] + y])
      );
    }
  }

  // eslint-disable-next-line default-case
  switch (direction) {
    case "left":
      TryMoving(-1, 0);
      break;
    case "right":
      TryMoving(1, 0);
      break;
    case "down":
      TryMoving(0, 1);
      break;
    case "up":
      // only used at the beginning of the level
      TryMoving(0, -1);
      break;
  }
}
