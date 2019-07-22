import {
  FETCH_CATEGORIES,
  FINISHED_FETCH_CATEGORIES,
  ERROR_FETCH_CATEGORIES,
} from '../actions/categories';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, isFetching: true };
    case FINISHED_FETCH_CATEGORIES:
      return { ...state, isFetching: false, categories: action.categories };
    case ERROR_FETCH_CATEGORIES:
      return {
        ...state,
        categories: [],
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
