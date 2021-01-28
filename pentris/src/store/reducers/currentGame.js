import { createReducer } from "typesafe-actions";
import {
  setCurrentPiece,
  setCurrentFallDelta,
  setCurrentLocation,
  resetCurrentLocation,
  setSoftDrop,
  setClearedRows,
  gameOver,
  setScore,
  clearGame,
} from "../actions";

const DEFAULT_STATE = {
  currentPiece: { pieces: [], name: "" },
  currentLocation: [7, 2], // At top, halfway to end
  fallDelta: 200,
  softDrop: false,
  clearedRows: [],
  score: 0,
  over: false,
};

const test = createReducer(DEFAULT_STATE)
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
  })
  .handleAction(setClearedRows, (state, { payload }) => {
    return { ...state, clearedRows: payload };
  })
  .handleAction(setScore, (state, { payload }) => {
    return { ...state, score: payload };
  })
  .handleAction(gameOver, (state, { payload }) => {
    return { ...state, over: payload };
  })
  .handleAction(clearGame, (state) => {
    return { ...state, ...DEFAULT_STATE };
  });

export default test;
