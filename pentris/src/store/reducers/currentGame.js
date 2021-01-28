import { createReducer } from "typesafe-actions";
import {
  setCurrentPiece,
  setCurrentFallDelta,
  setCurrentLocation,
  resetCurrentLocation,
  setSoftDrop,
} from "../actions";

const test = createReducer({
  currentPiece: {},
  currentLocation: [7, 2], // At top, halfway to end
  fallDelta: 800,
  softDrop: false,
})
  .handleAction(setCurrentPiece, (state, { payload }) => {
    return { ...state, currentPiece: payload };
  })
  .handleAction(setCurrentLocation, (state, { payload }) => {
    return { ...state, currentLocation: payload };
  })
  .handleAction(setSoftDrop, (state, { payload }) => {
    return { ...state, softDrop: payload };
  })
  .handleAction(resetCurrentLocation, (state) => {
    return { ...state, currentLocation: [7, 2] };
  })
  .handleAction(setCurrentFallDelta, (state, { payload }) => {
    return { ...state, fallDelta: payload };
  });

export default test;
