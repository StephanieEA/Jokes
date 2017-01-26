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
                text={<Link to='/settings'>Settings</Link>}
                onClick={renderSettings}
        /> : <Button className='settings'
                        text={<Link to='/jokes'>Jokes</Link>}
                        onClick={renderSettings}
        />
            }
      </h1>
  );
}

export default Header;
