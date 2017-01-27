import React from 'react';

import { shallow } from 'enzyme';
import { assert, expect } from 'chai';

import Settings from './Settings';

describe('Settings', () => {
  it('renders  as a <section> with 2 button and 3 input children', () => {
    const fakeText='yo'
    const wrapper = shallow(<Settings/>)
    assert.equal(wrapper.type(), 'section');
    expect(wrapper.find('Button')).to.have.length(2);
    expect(wrapper.find('Input')).to.have.length(3);
  });
});
