import { createAction } from "typesafe-actions";

/** @type { ActionCreator<'SET_BOARD_LOCATION', { top: number, left: number }> } */
export const setBoardRect = createAction("SET_BOARD_LOCATION")();
