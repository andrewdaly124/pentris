import Move from "../game/logic/move";
import Rotate from "../game/logic/rotate";

import { setSoftDrop } from "../store/actions";

import store from "../store";

export function KeyDownHandler(e) {
  // eslint-disable-next-line default-case
  switch (e.key) {
    case "ArrowLeft":
      Move("left");
      break;
    case "ArrowRight":
      Move("right");
      break;
    case "ArrowDown":
      Move("down");
      store.dispatch(setSoftDrop(true));
      break;
    case "x":
      Rotate("cw");
      break;
    case "z":
      Rotate("ccw");
      break;
  }
}

export function KeyUpHandler(e) {
  // eslint-disable-next-line default-case
  switch (e.key) {
    case "ArrowDown":
      store.dispatch(setSoftDrop(false));
      break;
  }
}
