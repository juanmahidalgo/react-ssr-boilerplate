import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './news';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const headlines = [{
  url: 'test',
  urlToImage: 'test',
  content: 'test',
  title: 'test',
  description: 'test',
  publishedAt: 'test',
  source: {
    name: 'test',
  },
}];

let mockedNews = Promise.resolve({ headlines });

jest.mock('../api', () => ({
  fetchHeadlines: () => mockedNews
}));

describe('News - Actions', () => {
  it('creates FINISHED_FETCH_HEADLINES when searching headlines has been done', () => {
    const expectedActions = [
      { type: actions.FETCH_HEADLINES },
      { type: actions.FINISHED_FETCH_HEADLINES, headlines },
    ];
    const store = mockStore({});

    return store.dispatch(actions.getHeadlines()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates ERROR_FETCH_HEADLINES when searching headlines has been returned error', () => {
    const expectedActions = [
      { type: actions.FETCH_HEADLINES },
      { type: actions.ERROR_FETCH_HEADLINES, error: {} },
    ];
    const store = mockStore({});
    mockedNews = Promise.reject({});

    return store.dispatch(actions.getHeadlines()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});