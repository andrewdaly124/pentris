/**
 * TODO:
 * type returns and state
 */

export const getBoardWidth = (state) => state.rules.board.width;
export const getBoardHeight = (state) => state.rules.board.height;
export const getBoardRect = (state) => {
  return { top: state.rules.board.top, left: state.rules.board.left };
};
export const getBoardMap = (state) => state.rules.board.map;
