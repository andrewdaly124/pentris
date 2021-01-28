import Intersects from "./intersects";
import { setCurrentLocation } from "../../store/actions";
import { getCurrentLocation, getCurrentPiece } from "../../store/selectors";
import store from "../../store";

/**
 * Get array of [x,y] coords signifying the potential
 * position of the next iteration based on x,y
 *
 * @param { number } x
 * @param { number } y
 * @param { Array } position
 */
export function GetNewPosition(x = 0, y = 0, position = null) {
  const currentLocation = getCurrentLocation(store.getState());
  // If no position arg, get state position
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

/**
 * Try to Move, if not return false & don't move
 *
 * @param { string } direction
 */
export default function Move(direction) {
  const pieceLocation = getCurrentLocation(store.getState());

  // Try to dispatch new position if no intersections
  function TryMoving(x = 0, y = 0) {
    if (!Intersects(GetNewPosition(x, y))) {
      store.dispatch(
        setCurrentLocation([pieceLocation[0] + x, pieceLocation[1] + y])
      );
      return true;
    }
    return false;
  }

  // eslint-disable-next-line default-case
  switch (direction) {
    case "left":
      return TryMoving(-1, 0);
    case "right":
      return TryMoving(1, 0);
    case "down":
      return TryMoving(0, 1);
    case "up":
      // only used at the beginning of the level
      return TryMoving(0, -1);
  }
}
