/**
 * TODO:
 * type returns and state
 */

export const getCurrentPiece = (state) => state.currentGame.currentPiece;
export const getCurrentLocation = (state) => state.currentGame.currentLocation;
export const getCurrentFallDelta = (state) =>
  state.currentGame.fallDelta ** (state.currentGame.softDrop ? 2 / 3 : 1);
export const getClearedRows = (state) => state.currentGame.clearedRows;
export const getScore = (state) => state.currentGame.score;
export const getGameOver = (state) => state.currentGame.over;
