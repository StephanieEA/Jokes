import React from 'react';

import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';

import JokeGrid from './JokeGrid';
import App from '../../components/App/App'

describe('JokeGrid', () => {
  it('renders as a <section>', () => {
    const fakeJokes = [{ joke: 'haha', id: '432', favorite: 'false' }, {joke: 'yuck', id: '2', favorite: 'true'}];
    const wrapper = shallow(<JokeGrid jokes={fakeJokes}/>)
    assert.equal(wrapper.type(), 'section');
  });


  it('when there are multiple jokes, they are rendered  correctly and in order', () => {
    const fakeJokes = [{categories: [], favorite: true, id: 33, joke: 'haha',}, {categories: [], favorite: false, id: 27, joke: 'yuck',}, {categories: [], favorite: true, id: 2, joke: 'kobe',}, ]
    const wrapper = shallow(<JokeGrid jokes={fakeJokes}/>)
    const renderedP1 = wrapper.find('p').first().text()
    const renderedP2 = wrapper.find('p').at(1).text()
    const renderedP3 = wrapper.find('p').at(2).text()
    expect(renderedP1).to.include('haha')
    expect(renderedP2).to.include('yuck')
    expect(renderedP3).to.include('kobe')
  })

});
