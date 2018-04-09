import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import * as api from '../api';

export default function* fetchVideosSaga(action) {
  const { payload: { query, initial } } = action;
  yield call(delay, 1000);
  yield put(actions.fetchVideosAttempt());
  try {
    const res = yield call(api.youtube, query);
    yield put(actions.fetchVideosSuccess(res));
    if (initial) {
      yield put(actions.selectVideo(res.items[0]));
    }
  } catch (e) {
    yield put(actions.fetchVideosFail(e));
  }
}