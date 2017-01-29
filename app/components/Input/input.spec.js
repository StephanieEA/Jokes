import React from 'react';

import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';

import Input from './Input';

describe('Input', () => {
  it('renders as a <input>', () => {
    const wrapper = shallow(<Input />)
    assert.equal(wrapper.type(), 'input');
  });

  it('the onChange property triggers a prop function', () => {
    const pFunction = sinon.spy()
    const wrapper = shallow(<Input onChange={pFunction}/>)
    assert.equal(pFunction.calledOnce, false)
    wrapper.simulate('change')
    assert.equal(pFunction.calledOnce, true)
  })

});
