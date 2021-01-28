export const getCurrentPiece = (state) => state.currentGame.currentPiece;
export const getCurrentLocation = (state) => state.currentGame.currentLocation;
export const getCurrentFallDelta = (state) =>
  state.currentGame.fallDelta ** (state.currentGame.softDrop ? 2 / 3 : 1);
