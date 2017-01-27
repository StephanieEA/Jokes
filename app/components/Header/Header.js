import React from 'react';
import { Link } from 'react-router'

import './header-style';

import Button from '../Button/Button';

const Header = ({renderSettings, renderControls}) => {

  return (
      <h1 className='Header'>CHUCK NORRIS JOKE MACHINE
        {/* Can I make the text property conditional instead of the button as a whole */}
      {renderControls ?
        <Button className='settings'
                text='Settings'
                onClick={renderSettings}
                targetPath='/settings'
        /> : <Button className='settings'
                        text='Jokes'
                        onClick={renderSettings}
                        targetPath='/jokes'
        />
            }
      </h1>
  );
}

export default Header;
