import { put, takeLatest, delay } from 'redux-saga/effects';
import { changeInputValue, setInputValue } from './actions';

const { type: CHANGE_VALUE } = changeInputValue();

function* handleSearchInput({ payload }) {
  yield delay(300);

  yield put(setInputValue(payload));
}

export default function* watchForSearchInput() {
  yield takeLatest(CHANGE_VALUE, handleSearchInput);
}
