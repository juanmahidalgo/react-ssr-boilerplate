/* global jest */

import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactTestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { createMount } from '@material-ui/core/test-utils';
import { Categories } from './Categories';
import Category from '../components/Category';
import Loading from '../components/Loading';

const mockedGetCategories = jest.fn();
const mockedCategories = (props) => ({
  categories: ['Sports', 'Tech'],
  isFetching: false,
  ...props,
});
const mockedHistory = {};
const mockStore = configureMockStore([thunk]);

jest.mock('../actions/categories', () => ({
  getCategories: () => mockedGetCategories
}));

describe('<Headline />', () => {
  const mount = createMount();

  it('renders correctly', () => {
    const tree = ReactTestRenderer.create(
      <Provider store={mockStore({ categories: mockedCategories() })}>
        <Categories history={mockedHistory} />
      </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render loading component', () => {
    const wrapper = mount(
      <Provider store={mockStore({ categories: mockedCategories({ isFetching: true }) })}>
        <Categories history={mockedHistory} />
      </Provider>);
    expect(wrapper.find(Loading)).toHaveLength(1);
    expect(wrapper.find(Category)).toHaveLength(0);
  });

  it('should render 2 categories', () => {
    const wrapper = mount(
      <Provider store={mockStore({ categories: mockedCategories() })}>
        <Categories history={mockedHistory} />
      </Provider>);
    expect(wrapper.find(Category)).toHaveLength(2);
  });

  it('should call getCategories once finished first render', () => {
    const renderer = ReactTestRenderer.create(
      <Provider store={mockStore({ categories: mockedCategories })}>
        <Categories history={mockedHistory} />
      </Provider>
    );
    renderer.update();
    expect(mockedGetCategories).toHaveBeenCalled();
  });
});
