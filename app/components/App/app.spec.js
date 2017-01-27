import React, { Component } from 'react';


import sinon from 'sinon';
import { shallow, mount, render} from 'enzyme';
import { assert, expect } from 'chai';

import App from './App';

describe('App', () => {

  it.skip('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });


});
