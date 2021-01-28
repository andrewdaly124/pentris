import { createReducer } from "typesafe-actions";
import { setBoardRect, createBoardMap, setBoardMap } from "../actions";

const rules = createReducer({
  board: {
    width: 15,
    height: 30,
    left: 0,
    top: 0,
    map: [],
  },
})
  .handleAction(setBoardRect, (state, { payload }) => {
    return {
      ...state,
      board: {
        ...state.board,
        left: payload.left,
        top: payload.top,
      },
    };
  })
  .handleAction(createBoardMap, (state, { payload }) => {
    const [width, height] = payload;
    const newBoardMap = [];
    for (let i = 0; i < width; i += 1) {
      const row = [];
      for (let j = 0; j < height; j += 1) {
        row.push({ populated: false, color: 0 });
      }
      newBoardMap.push(row);
    }
    return {
      ...state,
      board: {
        ...state.board,
        map: newBoardMap,
      },
    };
  })
  .handleAction(setBoardMap, (state, { payload }) => {
    return {
      ...state,
      board: {
        ...state.board,
        map: payload,
      },
    };
  });
export default rules;
