import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../containers/Header';

test('HEADER COMPONENT TESTING', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // expect(wrapper.find('h1').length).toBe(1);
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
