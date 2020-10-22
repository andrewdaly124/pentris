import { createReducer } from 'typesafe-actions';

const rules = createReducer({
  board: { width: 15, height: 30 },
});
export default rules;
