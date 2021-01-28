import Intersects from "./intersects";
import { GetNewPosition } from "./move";
import { setCurrentPiece } from "../../store/actions";
import { getCurrentPiece } from "../../store/selectors";
import store from "../../store";

/**
 * Get position array for a clockwise or counterclockwise rotation
 *
 * @param { string } direction
 */
function GetNewRotation(direction) {
  const currentPieces = getCurrentPiece(store.getState()).pieces;
  const newLocation = [];

  // Swapping x,y indices and multiplying one side by -1 makes for a clean
  // 90 degree rotation
  for (let i = 0; i < currentPieces.length; i++) {
    // eslint-disable-next-line default-case
    switch (direction) {
      case "cw":
        newLocation.push([-currentPieces[i][1], currentPieces[i][0]]);
        break;
      case "ccw":
        newLocation.push([currentPieces[i][1], -currentPieces[i][0]]);
        break;
    }
  }

  return newLocation;
}

/**
 * Wrapper for GetNewRotation with Intersect handling
 *
 * @param { string } direction
 */
export default function Rotate(direction) {
  const currentPiece = getCurrentPiece(store.getState());
  const newLocation = GetNewRotation(direction);
  if (!Intersects(GetNewPosition(0, 0, newLocation))) {
    store.dispatch(setCurrentPiece({ ...currentPiece, pieces: newLocation }));
  }
}
