import Intersects from "./intersects";
import { GetNewPosition } from "./move";

import { setCurrentPiece } from "../../store/actions";
import { getCurrentPiece } from "../../store/selectors";
import store from "../../store";

export function GetNewRotation(direction) {
  const currentPieces = getCurrentPiece(store.getState()).pieces;
  const newLocation = [];

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

export default function Rotate(direction) {
  const currentPiece = getCurrentPiece(store.getState());
  const newLocation = GetNewRotation(direction);
  if (!Intersects(GetNewPosition(0, 0, newLocation))) {
    store.dispatch(setCurrentPiece({ ...currentPiece, pieces: newLocation }));
  }
}
