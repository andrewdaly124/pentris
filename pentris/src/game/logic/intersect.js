import { getBoardMap } from "../../store/selectors";
import store from "../../store";

export default function Intersects(newPosition) {
  const boardMap = getBoardMap(store.getState());
  console.log("Intersects?", boardMap);
  for (let i = 0; i < newPosition.length; i++) {
    const block = newPosition[i];
    if (
      !boardMap[block[0]]?.[block[1]] ||
      boardMap[block[0]][block[1]].populated
    ) {
      return true;
    }
  }
  return false;
}
