import { fetchCategories } from '../api';

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FINISHED_FETCH_CATEGORIES = 'FINISHED_FETCH_CATEGORIES';
export const ERROR_FETCH_CATEGORIES = 'ERROR_FETCH_CATEGORIES';

export const getCategories = () =>
  (dispatch) => {
    dispatch({
      type: FETCH_CATEGORIES,
    });
    return fetchCategories()
      .then(({ categories }) => {
        dispatch({
          type: FINISHED_FETCH_CATEGORIES,
          categories,
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR_FETCH_CATEGORIES,
          error,
        });
      });
  };