import { takeEvery } from "redux-saga/effects";
import { setBoardRect } from "../actions";

// eslint-disable-next-line no-unused-vars
function logSetVarInstance({ payload }) {
  // eslint-disable-next-line no-console
  // console.log("saga", payload);
}

export default function* test() {
  yield takeEvery(setBoardRect, logSetVarInstance);
}
