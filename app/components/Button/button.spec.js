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
    const wrapper = mount(<Button className={fakeName} />)
    const buttonWrapper = wrapper.find('button')
    expect(buttonWrapper.props().className).to.equal('fakeName')
  })

  it('renders a child link', () => {
    const wrapper = shallow(<Button />)
    const buttonText = wrapper.find('button').text()
    expect(buttonText).to.equal('<Link />')
  });

  it('renders text property correctly in link', () => {
    const fakeName = 'fakeName'
    const fakeLabel = 'fakeLabel'
    const fakeText = 'fakeText'
    const wrapper = mount(<Button className={fakeName} aria-label={fakeLabel} text={fakeText}/>)
    const LinkWrapper = wrapper.find('Link').text()
    expect(LinkWrapper).to.equal('fakeText')
  })

  it('the onClick property triggers the function from its parent', () => {
    const pFunction = sinon.spy()
    const wrapper = shallow(<Button onClick={pFunction}/>)
    assert.equal(pFunction.calledOnce, false)
    wrapper.simulate('click')
    assert.equal(pFunction.calledOnce, true)
  })

});
