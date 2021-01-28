import Move from "../game/logic/move";

import { setSoftDrop } from "../store/actions";

import store from "../store";

export function KeyDownHandler(e) {
  switch (e.key) {
    case "ArrowLeft":
      Move("left");
      break;
    case "ArrowRight":
      Move("right");
      break;
    case "ArrowDown":
      store.dispatch(setSoftDrop(true));
      break;
    default:
      console.log(e.key);
  }
}

export function KeyUpHandler(e) {
  switch (e.key) {
    case "ArrowDown":
      store.dispatch(setSoftDrop(false));
      break;
    default:
      console.log(e.key);
  }
}
