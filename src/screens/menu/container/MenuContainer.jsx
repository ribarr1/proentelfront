import React from 'react';
import MenuLayout from '../component/MenuLayout';

const Menu = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <MenuLayout logout={props.logout} />
      <div style={{ flex: 1, padding: '20px' }}>
        {props.children}
      </div>
    </div>
  );
};

export default Menu;