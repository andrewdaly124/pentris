import { createAction } from "typesafe-actions";

/**
 *  TODO:
 *  - Add payload types
 */

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

/** @type { ActionCreator<'SET_CLEARED_ROWS'> } */
export const setClearedRows = createAction("SET_CLEARED_ROS")();

/** @type { ActionCreator<'SET_SCORE'> } */
export const setScore = createAction("SET_SCORE")();

/** @type { ActionCreator<'GAME_OVER'> } */
export const gameOver = createAction("GAME_OVER")();

/** @type { ActionCreator<'CLEAR_GAME'> } */
export const clearGame = createAction("CLEAR_GAME")();
