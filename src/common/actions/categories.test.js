import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './categories';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const categories = ['Sports'];
let mockedCategories = Promise.resolve({ categories });

jest.mock('../api', () => ({
  fetchCategories: () => mockedCategories
}));

describe('Categories - Actions', () => {
  it('creates FINISHED_FETCH_CATEGORIES when searching categories has been done', () => {
    const expectedActions = [
      { type: actions.FETCH_CATEGORIES },
      { type: actions.FINISHED_FETCH_CATEGORIES, categories },
    ];
    const store = mockStore({});

    return store.dispatch(actions.getCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates ERROR_FETCH_CATEGORIES when searching categories has been returned error', () => {
    const expectedActions = [
      { type: actions.FETCH_CATEGORIES },
      { type: actions.ERROR_FETCH_CATEGORIES, error: {} },
    ];
    const store = mockStore({});
    mockedCategories = Promise.reject({});

    return store.dispatch(actions.getCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});