import { takeEvery } from 'redux-saga/effects';
import { setTestVar } from '../actions';

function logSetVarInstance({ payload }) {
  // eslint-disable-next-line no-console
  console.log('saga', payload);
}

export default function* test() {
  yield takeEvery(setTestVar, logSetVarInstance);
}
