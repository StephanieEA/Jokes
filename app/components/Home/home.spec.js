import React from 'react';

import { shallow } from 'enzyme';
import { assert } from 'chai';

import Home from './Home';

describe('Home', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<Home/>)
    assert.equal(wrapper.type(), 'section');
  });
});
