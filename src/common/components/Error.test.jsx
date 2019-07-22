import React from 'react';
import { createRender } from '@material-ui/core/test-utils';
import Error from './Error';

describe('<Error />', () => {
  const render = createRender();

  it('renders correctly', () => {
    const wrapper = render(<Error message={'Error fetching news'} />);
    expect(wrapper).toMatchSnapshot();
  });

});