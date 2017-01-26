import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon'

import Header from './Header';
import Button from '../Button/Button';

describe('<Header/>', () => {
  it('should display a single h1 tag', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should trigger our renderSettings function', () => {
    const renderSettings = sinon.spy()
    const wrapper = mount(<Button onClick={renderSettings} />);
    wrapper.simulate('click');
    expect(renderSettings.calledOnce).to.equal(true);
  });

  it('should render the correct link', () => {
    let wrapper = mount(<Header renderControls={true}/>).find('Link');
    expect(wrapper.prop('to')).to.equal('/settings')
    wrapper = mount(<Header renderControls={false}/>).find('Link');
    console.log(wrapper.debug())
    expect(wrapper.prop('to')).to.equal('/jokes')
  })
});
