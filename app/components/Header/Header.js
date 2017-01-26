import React from 'react';
import './header-style';

import Button from '../Button/Button';

const Header = () => {
  return (
      <h1 className='Header'>CHUCK NORRIS JOKE MACHINE
      <Button className='settings'
              text='Settings'
              onClick={()=> console.log('click settings')}/>
      </h1>
  );
}

export default Header;
