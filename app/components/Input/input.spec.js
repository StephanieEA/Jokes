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

  it('has className, type, placeholder, onChange, value, checked, and disabled properties', () => {
    const fakeClassName = 'well'
    const fakeType = 'this'
    const fakeChange = 'is'
    const fakeValue = 'verbose'
    const fakePlaceholder = 'lengthy'
    const fakeChecked = 'tedious'
    const fakeDisabled = 'unecessary'

    const wrapper = shallow(<Input className={fakeClassName} type={fakeType} onChange={fakeChange} value={fakeValue} placeholder={fakePlaceholder} checked={fakeChecked} disabled={fakeDisabled}/>)
    const inputWrapper = wrapper.find('input')
    expect(inputWrapper.props().className).to.equal('well')
    expect(inputWrapper.props().type).to.equal('this')
    expect(inputWrapper.props().onChange).to.equal('is')
    expect(inputWrapper.props().value).to.equal('verbose')
    expect(inputWrapper.props().placeholder).to.equal('lengthy')
    expect(inputWrapper.props().checked).to.equal('tedious')
    expect(inputWrapper.props().disabled).to.equal('unecessary')
  })

  it('the onChange property triggers a prop function', () => {
    const pFunction = sinon.spy()
    const wrapper = shallow(<Input onChange={pFunction}/>)
    assert.equal(pFunction.calledOnce, false)
    wrapper.simulate('change')
    assert.equal(pFunction.calledOnce, true)
  })

});
