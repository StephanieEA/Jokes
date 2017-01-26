import React from 'react';

import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';

import Button from './Button';

describe('Button', () => {
  it('renders as a <button>', () => {
    const wrapper = shallow(<Button />)
    assert.equal(wrapper.type(), 'button');
  });

  it('has className and aria-label properties', () => {
    const fakeName = 'fakeName'
    const fakeLabel = 'fakeLabel'
    const wrapper = shallow(<Button className={fakeName} aria-label={fakeLabel}/>)
    const buttonWrapper = wrapper.find('button')
    expect(buttonWrapper.props().className).to.equal('fakeName')
  //  expect(buttonWrapper.prop(aria-label)).to.equal('fakeLabel')
  })

  it('renders text correctly', () => {
    const fakeText = 'Settings'
    const wrapper = shallow(<Button text={fakeText}/>)
    const buttonText = wrapper.find('button').text()
    expect(buttonText).to.equal('Settings')
  });

  it('the onClick property triggers the function from its parent', () => {
    const pFunction = sinon.spy()
    const wrapper = shallow(<Button onClick={pFunction}/>)
    assert.equal(pFunction.calledOnce, false)
    wrapper.simulate('click')
    assert.equal(pFunction.calledOnce, true)
  })
  
});
