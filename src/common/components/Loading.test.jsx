import React from 'react';
import { createRender } from '@material-ui/core/test-utils';
import Loading from './Loading';

describe('<Loading />', () => {
  const render = createRender();

  it('renders correctly', () => {
    const wrapper = render(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });

});