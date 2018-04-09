import * as types from '../constants';

export function fetchVideosAttempt() {
  return {
    type: types.FETCH_VIDEOS_ATTEMPT
  };
}

export function fetchVideosSuccess(videos) {
  return {
    type: types.FETCH_VIDEOS_SUCCESS,
    payload: videos
  };
}

export function fetchVideosFail(error) {
  return {
    type: types.FETCH_VIDEOS_FAIL,
    payload: error
  };
}

export function fetchVideosCancel() {
  return {
    type: types.FETCH_VIDEOS_CANCEL
  };
}

export function selectVideo(video) {
  return {
    type: types.SELECT_VIDEO,
    payload: video
  };
}

export function getVideos(query, initial) {
  return {
    type: types.FETCH_VIDEOS,
    payload: {
      query,
      initial
    }
  };
}
