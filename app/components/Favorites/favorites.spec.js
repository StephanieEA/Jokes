import React from 'react';

import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';

import Favorites from './Favorites';

describe('Favorites', () => {
  it('renders as a <section>', () => {
    const fakeJokes = [{ joke: 'haha', id: '432', favorite: 'false' }, {joke: 'yuck', id: '2', favorite: 'true'}];
    const wrapper = shallow(<Favorites jokes={fakeJokes}/>)
    assert.equal(wrapper.type(), 'section');
  });

  it('when there are no favorites the section renders "You don/t have any faves"', () => {
    const fakeJokes = [{ joke: 'haha', id: '432', favorite: 'false' }];
    const wrapper = shallow(<Favorites jokes={fakeJokes}/>)
    const shotDown = wrapper.text()
    expect(shotDown).to.include("You don't have any faves");
  });

  it('when a joke has a key value pair of favorite : true it is rendered as a <p> with a <button>', () => {
    const fakeJokes = [{categories: [], favorite: true, id: 27, joke: 'haha',} ]
    const wrapper = shallow(<Favorites jokes={fakeJokes}/>)
    const renderedP = wrapper.find('p').first().text()
    const renderedB = wrapper.find('.favorite-btn')
    expect(renderedP).to.include('haha')
    expect(renderedB).to.have.length(1)
  })

  it('when there are multiple jokes with a favorite:true, they are rendered in order', () => {
    const fakeJokes = [{categories: [], favorite: true, id: 33, joke: 'haha',}, {categories: [], favorite: false, id: 27, joke: 'yuck',}, {categories: [], favorite: true, id: 2, joke: 'kobe',}, ]
    const wrapper = shallow(<Favorites jokes={fakeJokes}/>)
    const renderedP1 = wrapper.find('p').first().text()
    const renderedP2 = wrapper.find('p').at(1).text()
    expect(renderedP1).to.include('haha')
    expect(renderedP2).to.include('kobe')
  })

});
