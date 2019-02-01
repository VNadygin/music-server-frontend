export const actionTypes = {
  FETCH_LIBRARY: 'FETCH_LIBRARY',
  FETCH_LIBRARY_SUCCESS: 'FETCH_LIBRARY_SUCCESS',
  FETCH_LIBRARY_ERROR: 'FETCH_LIBRARY_ERROR',
  SELECT_SONG: 'SELECT_SONG',
  PAUSE: 'PAUSE',
  PLAY: 'PLAY',
  SELECT_NEXT_SONG: 'SELECT_NEXT_SONG',
  SELECT_PREV_SONG: 'SELECT_PREV_SONG',
};

export const fetchLibrary = () => {
  return {
    type: actionTypes.FETCH_LIBRARY,
  };
};

export const fetchLibrarySuccess = data => {
  return {
    type: actionTypes.FETCH_LIBRARY_SUCCESS,
    data,
  };
};

export const fetchLibraryError = error => {
  return {
    type: actionTypes.FETCH_LIBRARY_ERROR,
    error,
  };
};

export const selectSong = (id, playing = true) => {
  return {
    type: actionTypes.SELECT_SONG,
    selectedId: id,
    playing,
  };
};

export const nextSong = () => {
  return {
    type: actionTypes.SELECT_NEXT_SONG,
  };
};

export const prevSong = () => {
  return {
    type: actionTypes.SELECT_PREV_SONG,
  };
};

export const pause = () => {
  return {
    type: actionTypes.PAUSE,
    playing: false,
  };
};

export const play = () => {
  return {
    type: actionTypes.PLAY,
    playing: true,
  };
};
