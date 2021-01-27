import { createReducer } from "typesafe-actions";
import { setTestVar } from "../actions";

const test = createReducer({
  testVar: 2,
}).handleAction(setTestVar, (state, { payload }) => {
  return { ...state, testVar: payload };
});

export default test;
