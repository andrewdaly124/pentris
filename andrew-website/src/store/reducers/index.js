import { combineReducers } from "redux";

import test from "./test";
import rules from "./rules";
import currentGame from "./currentGame";

const reducers = combineReducers({ test, rules, currentGame });

export default reducers;
