import React from 'react';
import { Link } from 'react-router'

import './header-style';

import Button from '../Button/Button';

export default class Header extends React.Component {
  render() {
    return (
      <h1 className='Header'>CHUCK NORRIS JOKE MACHINE
        {this.props.renderControls ?
        <Button className='settings'
                text='Settings'
                onClick={this.props.renderSettings}
                targetPath='/settings'/>
        : <Button className='settings'
                        text='Jokes'
                        onClick={this.props.renderSettings}
                        targetPath='/jokes'/>
        }
      </h1>
    )
  }
}
