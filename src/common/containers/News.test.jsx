/* global jest */

import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactTestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { createMount } from '@material-ui/core/test-utils';

import { News } from './News';
import Loading from '../components/Loading';
import Headline from '../components/Headline';
import { mockedHeadline } from '../../utils';

jest.mock('react-reactions', () => ({
  FacebookSelector: () => null,
  FacebookCounter: () => null,
}))

const mockedGetHeadlines = jest.fn();
const mockedCategory = 'Sports';
const mockedNewsStore = (props) => ({
  headlines: [mockedHeadline, mockedHeadline],
  isFetching: false,
  ...props,
});
const mockStore = configureMockStore([thunk]);

jest.mock('../actions/news', () => ({
  getHeadlines: () => mockedGetHeadlines
}));

describe('<News />', () => {
  const mount = createMount();

  it('renders correctly', () => {
    const tree = ReactTestRenderer.create(
      <Provider store={mockStore({ news: mockedNewsStore() })}>
        <News match={{ params: { category: mockedCategory } }} />
      </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render loading component', () => {
    const wrapper = mount(
      <Provider store={mockStore({ news: mockedNewsStore({ isFetching: true }) })}>
        <News match={{ params: { category: mockedCategory } }} />
      </Provider>);
    expect(wrapper.find(Loading)).toHaveLength(1);
    expect(wrapper.find(Headline)).toHaveLength(0);
  });

  it('should render 2 headlines', () => {
    const wrapper = mount(
      <Provider store={mockStore({ news: mockedNewsStore() })}>
        <News match={{ params: { category: mockedCategory } }} />
      </Provider>);
    expect(wrapper.find(Headline)).toHaveLength(2);
  });

  it('should call getHeadlines once finished first render', () => {
    const store = mockStore({ news: mockedNewsStore() });
    const renderer = ReactTestRenderer.create(
      <Provider store={store}>
        <News match={{ params: { category: mockedCategory } }} />
      </Provider>
    );
    renderer.update();
    expect(mockedGetHeadlines).toHaveBeenCalled();
  });
});
