import { setBoardMap, setCurrentPiece } from "../../store/actions";
import { getBoardMap } from "../../store/selectors";
import store from "../../store";

const ROW_DELETE_DELAY = 50;

export default async function End() {
  const boardMap = getBoardMap(store.getState());
  store.dispatch(setCurrentPiece({ pieces: [], name: "" }));

  for (let i = boardMap[0]?.length - 1; i >= 0; i--) {
    await new Promise((resolve) => {
      setTimeout(() => {
        for (let j = 0; j < boardMap?.length; j++) {
          boardMap[j][i] = { populated: false, color: 0 };
        }
        store.dispatch(setBoardMap(boardMap));
        resolve();
      }, ROW_DELETE_DELAY);
    });
  }
}
