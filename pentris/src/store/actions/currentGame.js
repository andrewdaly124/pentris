import { createAction } from "typesafe-actions";

/** @type { ActionCreator<'SET_CURRENT_PIECE'> } */
export const setCurrentPiece = createAction("SET_CURRENT_PIECE")();

/** @type { ActionCreator<'SET_CURRENT_LOCATION'> } */
export const setCurrentLocation = createAction("SET_CURRENT_LOCATION")();

/** @type { ActionCreator<'SET_SOFT_DROP'> } */
export const setSoftDrop = createAction("SET_SOFT_DROP")();

/** @type { ActionCreator<'RESET_CURRENT_LOCATION'> } */
export const resetCurrentLocation = createAction("RESET_CURRENT_LOCATION")();

/** @type { ActionCreator<'SET_CURRENT_FALL_DELTA'> } */
export const setCurrentFallDelta = createAction("SET_CURRENT_FALL_DELTA")();
