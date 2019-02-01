import { actionTypes } from '../actions';

export const initialState = {
  error: null,
  loading: true,
  data: {
    byId: {},
    allIds: [],
  },
  selectedSongId: null,
  playing: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_LIBRARY:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_LIBRARY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case actionTypes.FETCH_LIBRARY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case actionTypes.SELECT_SONG:
      const selectedSongId = state.data.byId[action.selectedId]
        ? action.selectedId
        : null;

      return {
        ...state,
        selectedSongId,
        playing: action.playing,
      };

    case actionTypes.PLAY:
      return {
        ...state,
        playing: action.playing,
      };

    case actionTypes.PAUSE:
      return {
        ...state,
        playing: action.playing,
      };

    case actionTypes.SELECT_PREV_SONG: {
      const currentIndex = state.data.allIds.indexOf(state.selectedSongId);
      const songsAmount = state.data.allIds.length;
      const nextIndex = currentIndex === 0 ? songsAmount - 1 : currentIndex - 1;
      const nextSongId = state.data.allIds[nextIndex];

      return {
        ...state,
        selectedSongId: nextSongId,
      };
    }

    case actionTypes.SELECT_NEXT_SONG: {
      const currentIndex = state.data.allIds.indexOf(state.selectedSongId);
      const songsAmount = state.data.allIds.length;
      const nextIndex = currentIndex !== songsAmount - 1 ? currentIndex + 1 : 0;
      const nextSongId = state.data.allIds[nextIndex];

      return {
        ...state,
        selectedSongId: nextSongId,
      };
    }

    default:
      return state;
  }
}

export default reducer;
