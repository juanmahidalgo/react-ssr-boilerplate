/* global jest */

import React from 'react';
import { createRender } from '@material-ui/core/test-utils';
import Headline from './Headline';
import { mockedHeadline } from '../../utils';

jest.mock('@material-ui/core/Tooltip', () => () => null);
jest.mock('react-reactions', () => ({
  FacebookSelector: () => null,
  FacebookCounter: () => null,
}))

describe('<Headline />', () => {
  const render = createRender();

  it('renders correctly', () => {
    const wrapper = render(<Headline headline={mockedHeadline} />);
    expect(wrapper).toMatchSnapshot();
  });
});