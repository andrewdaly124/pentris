import { createReducer } from "typesafe-actions";
import { setBoardRect } from "../actions";

const rules = createReducer({
  board: {
    width: 15,
    height: 30,
    left: 0,
    top: 0,
  },
}).handleAction(setBoardRect, (state, { payload }) => {
  return {
    ...state,
    board: {
      ...state.board,
      left: payload.left,
      top: payload.top,
    },
  };
});
export default rules;
