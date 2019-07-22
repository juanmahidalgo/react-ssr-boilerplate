/* global jest */

import React from 'react';
import { createRender, createShallow } from '@material-ui/core/test-utils';
import { Chip } from '@material-ui/core';
import Category from './Category';

const mockedCategory = 'Sports';
const mockedOnClick = jest.fn();

describe('<Category />', () => {
  const render = createRender();
  const shallow = createShallow();

  it('renders correctly', () => {
    const wrapper = render(<Category category={mockedCategory} handleClick={mockedOnClick} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call mockedOnClick when onClick on Chip', () => {
    const wrapper = shallow(<Category category={mockedCategory} handleClick={mockedOnClick} />);
    wrapper.find(Chip).simulate('click');
    expect(mockedOnClick).toHaveBeenCalled();
  });
});