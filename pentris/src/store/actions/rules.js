import { createAction } from "typesafe-actions";

/**
 *  TODO:
 *  - Add payload types
 */

/** @type { ActionCreator<'SET_BOARD_LOCATION'> } */
export const setBoardRect = createAction("SET_BOARD_LOCATION")();

/** @type { ActionCreator<'CREATE_BOARD_MAP'> } */
export const createBoardMap = createAction("CREATE_BOARD_MAP")();

/** @type { ActionCreator<'SET_BOARD_MAP'> } */
export const setBoardMap = createAction("SET_BOARD_MAP")();
