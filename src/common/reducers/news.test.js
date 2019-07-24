    
import reducer from './news';
import {
  FETCH_HEADLINES,
  FINISHED_FETCH_HEADLINES,
  ERROR_FETCH_HEADLINES,
} from '../actions/news';

describe('news - reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ isFetching: true });
  });

  it('should handle FETCH_HEADLINES', () => {
    expect(
      reducer(undefined, {
        type: FETCH_HEADLINES,
      })
    ).toEqual({
      isFetching: true,
    });
  });

  it('should handle FINISHED_FETCH_HEADLINES', () => {
    const headlines = [{}];
    expect(
      reducer(undefined, {
        type: FINISHED_FETCH_HEADLINES,
        headlines,
      })
    ).toEqual({
      isFetching: false,
      headlines,
      error: undefined,
    });
  });

  it('should handle ERROR_FETCH_HEADLINES', () => {
    const error = 'Error';
    expect(
      reducer(undefined, {
        type: ERROR_FETCH_HEADLINES,
        error,
      })
    ).toEqual({
      isFetching: false,
      headlines: [],
      error,
    });
  });
});