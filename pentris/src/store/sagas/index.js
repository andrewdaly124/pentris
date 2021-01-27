import { all, spawn } from "redux-saga/effects";

import test from "./test";

const sagaMap = [test];

export default function* sagas() {
  yield all(sagaMap.map((saga) => spawn(saga)));
}
