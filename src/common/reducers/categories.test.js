    
import reducer from './categories';
import {
  FETCH_CATEGORIES,
  FINISHED_FETCH_CATEGORIES,
  ERROR_FETCH_CATEGORIES,
} from '../actions/categories';

describe('categories - reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle FETCH_CATEGORIES', () => {
    expect(
      reducer(undefined, {
        type: FETCH_CATEGORIES,
      })
    ).toEqual({
      isFetching: true,
    });
  });

  it('should handle FINISHED_FETCH_CATEGORIES', () => {
    const categories = ['Sports'];
    expect(
      reducer(undefined, {
        type: FINISHED_FETCH_CATEGORIES,
        categories,
      })
    ).toEqual({
      isFetching: false,
      categories,
      error: undefined,
    });
  });

  it('should handle ERROR_FETCH_CATEGORIES', () => {
    const error = 'Error';
    expect(
      reducer(undefined, {
        type: ERROR_FETCH_CATEGORIES,
        error,
      })
    ).toEqual({
      isFetching: false,
      categories: [],
      error,
    });
  });
});