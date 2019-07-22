import { fetchHeadlines } from '../api';

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const FETCH_HEADLINES = 'FETCH_HEADLINES';
export const FINISHED_FETCH_HEADLINES = 'FINISHED_FETCH_HEADLINES';
export const ERROR_FETCH_HEADLINES = 'ERROR_FETCH_HEADLINES';

export const getHeadlines = (params) =>
  (dispatch) => {
    dispatch({
      type: FETCH_HEADLINES,
    });
    return fetchHeadlines(params)
      .then(({ headlines }) => {
        dispatch({
          type: FINISHED_FETCH_HEADLINES,
          headlines,
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR_FETCH_HEADLINES,
          error,
        });
      });
  };

export const changePage = () =>
  (dispatch) => {
    dispatch({ type: CHANGE_PAGE });
  }