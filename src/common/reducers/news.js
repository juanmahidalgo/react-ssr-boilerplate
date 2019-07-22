import {
  CHANGE_PAGE,
  FETCH_HEADLINES,
  ERROR_FETCH_HEADLINES,
  FINISHED_FETCH_HEADLINES,
} from '../actions/news';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HEADLINES:
      return { ...state, isFetching: true };
    case FINISHED_FETCH_HEADLINES:
      return { ...state, isFetching: false, headlines: action.headlines };
    case ERROR_FETCH_HEADLINES:
      return {
        ...state,
        headlines: [],
        isFetching: false,
        error: action.error,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        headlines: [],
        isFetching: true,
      };
    default:
      return state;
  }
};
