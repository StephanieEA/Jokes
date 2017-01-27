import React from 'react';

import { shallow } from 'enzyme';
import { assert, expect } from 'chai';

import RandomJoke from './RandomJoke';

describe('RandomJoke', () => {
  it('renders text correctly as a <p>', () => {
    const fakeText='yo'
    const wrapper = shallow(<RandomJoke text={fakeText}/>)
    assert.equal(wrapper.type(), 'p');
    expect(wrapper.text()).to.equal('yo')
  });
});
