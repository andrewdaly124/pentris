import { createAction } from "typesafe-actions";

/** @type { ActionCreator<'SET_CURRENT_PIECE', object> } */
export const setCurrentPiece = createAction("SET_CURRENT_PIECE")();

/** @type { ActionCreator<'SET_CURRENT_LOCATION', object> } */
export const setCurrentLocation = createAction("SET_CURRENT_LOCATION")();

/** @type { ActionCreator<'SET_CURRENT_FALL_DELTA', number> } */
export const setCurrentFallDelta = createAction("SET_CURRENT_FALL_DELTA")();
