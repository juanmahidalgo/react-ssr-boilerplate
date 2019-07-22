/* global jest */

import React from 'react';
import ReactDOM from 'react-dom';
import { createRender, createShallow } from '@material-ui/core/test-utils';
import { act } from 'react-dom/test-utils';
import Headline from './Headline';

jest.mock('@material-ui/core/Tooltip', () => () => <span> Test </span>);
jest.mock('react-reactions', () => ({
  FacebookSelector: () => <div></div>,
  FacebookCounter: () => <div></div>,
}))
// jest.mock('react-reactions', () => () => ({
//   FacebookSelector: MockedComponent,
//   FacebookCounter: MockedComponent,
// }));
// jest.mock('react-reactions/FacebookCounter', () => MockedComponent);

const mockedHeadline = {
  url: 'test',
  urlToImage: 'test',
  content: 'test',
  title: 'test',
  description: 'test',
  publishedAt: 'test',
  source: {
    name: 'test',
  },
};

describe('<Headline />', () => {
  const render = createRender();
  const shallow = createShallow();

  it('renders correctly', () => {
    const wrapper = render(<Headline headline={mockedHeadline} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not have reaction', () => {
    const wrapper = shallow(<Headline headline={mockedHeadline} />);
    console.log('wrapper: ', wrapper);
    // act(() => 
    //   ReactDOM.render(<Headline headline={mockedHeadline} />, wrapper);
    // });
    // expect(wrapper.reaction).toBe('');
  });

  // it('should call mockedOnClick when onClick on Chip', () => {
  //   const wrapper = shallow(<Category category={mockedCategory} handleClick={mockedOnClick} />);
  //   wrapper.find(Chip).simulate('click');
  //   expect(mockedOnClick).toHaveBeenCalled();
  // });
});