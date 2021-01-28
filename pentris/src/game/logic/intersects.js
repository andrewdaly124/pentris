import { getBoardMap } from "../../store/selectors";
import store from "../../store";

/**
 * Check if given position is valid on the board
 *
 * @param { Array } newPosition
 */
export default function Intersects(newPosition) {
  const boardMap = getBoardMap(store.getState());
  for (let i = 0; i < newPosition.length; i++) {
    const block = newPosition[i];
    // Out of bounds || already occupied with a piece
    if (
      !boardMap[block[0]]?.[block[1]] ||
      boardMap[block[0]][block[1]].populated
    ) {
      return true;
    }
  }
  return false;
}
