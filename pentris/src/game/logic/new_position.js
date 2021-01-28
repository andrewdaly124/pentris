import { getCurrentLocation, getCurrentPiece } from "../../store/selectors";
import store from "../../store";

export default function GetNewPosition(x = 0, y = 0) {
  const currentLocation = getCurrentLocation(store.getState());
  const currentPieceBlocks = getCurrentPiece(store.getState()).pieces;

  const newLocation = [];
  console.log(currentLocation);
  for (let i = 0; i < currentPieceBlocks.length; i++) {
    newLocation.push([
      currentPieceBlocks[i][0] + currentLocation[0] + x,
      currentPieceBlocks[i][1] + currentLocation[1] + y,
    ]);
  }
  return newLocation;
}
