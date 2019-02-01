import { all, put, select, call, fork, takeLatest } from 'redux-saga/effects';
import { fetchLibraryAsync } from '../lib/api';

import {
  actionTypes,
  fetchLibrarySuccess,
  fetchLibraryError,
} from '../actions';

function* fetchLibrary() {
  try {
    const data = yield call(fetchLibraryAsync);
    yield put(fetchLibrarySuccess(data));
  } catch (error) {
    yield put(fetchLibraryError(error));
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.FETCH_LIBRARY, fetchLibrary)]);
}

export default rootSaga;
