import { takeLatest, all } from 'redux-saga/effects';
import * as types from '../constants';
import fetchVideosSaga from './fetchVideosSaga';

function* watchFetchVideos() {
  yield takeLatest(types.FETCH_VIDEOS, fetchVideosSaga);
}

export default function* rootSaga() {
  yield all ([watchFetchVideos()]);
}