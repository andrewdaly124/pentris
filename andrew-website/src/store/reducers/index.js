import { combineReducers } from 'redux';

import test from './test';
import rules from './rules';

const reducers = combineReducers({ test, rules });

export default reducers;
