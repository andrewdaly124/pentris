import { createAction } from 'typesafe-actions';

/** @type { ActionCreator<'SET_TEST_VAR', number | null> } */
export const setTestVar = createAction('SET_TEST_VAR')();
