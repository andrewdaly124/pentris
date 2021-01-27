import { createReducer } from "typesafe-actions";
import { setCurrentPiece, setCurrentFallDelta } from "../actions";

const test = createReducer({
  currentPiece: {},
  currentLocation: [7, 2], // At top, halfway to end
  fallDelta: 800,
})
  .handleAction(setCurrentPiece, (state, { payload }) => {
    return { ...state, currentPiece: payload };
  })
  .handleAction(setCurrentFallDelta, (state, { payload }) => {
    return { ...state, fallDelta: payload };
  });

export default test;
