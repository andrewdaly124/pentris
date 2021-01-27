import { combineReducers } from "redux";

import rules from "./rules";
import currentGame from "./currentGame";

const reducers = combineReducers({ rules, currentGame });

export default reducers;
