import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon'

import Controls from './Controls';
import Button from '../Button/Button';
import JokeNumber from '../Input/JokeNumber';

describe('<Controls/>', () => {
  it('should render two child button components', () => {
    const wrapper = mount(<Controls/>)
    expect(wrapper.find('button')).to.have.length(2);
  });

  it('should render a child JokeNumber component', () => {
    const wrapper = mount(<Controls/>)
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('new jokes button should trigger the parents getRandom function', () => {
    const onClick = sinon.spy()
    const wrapper = mount(<Controls getRandom={onClick}/>).find('.new-jokes');
    wrapper.simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });

  it('should render a link to /jokes', () => {
    const wrapper = mount(<Controls />).find('Link');
    expect(wrapper.prop('to')).to.equal('/jokes')
  })

  it('should use parents on change method to update input', () => {
    const onChange = sinon.spy()
    const event1 = { target: { value: '1' } };
    const event2 = { target: { value: '2' } };
    const wrapper = mount(<Controls handleNumber={onChange}/>).find('input');
    wrapper.simulate('change', event1)
    expect(onChange.calledOnce).to.equal(true)
    wrapper.simulate('change', event2)
    expect(onChange.calledTwice).to.equal(true)
  })

 });
