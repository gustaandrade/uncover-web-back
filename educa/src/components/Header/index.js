import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import './header.css';

import Logo from '../../assets/logo512.png';

const Header = () => {
  return (
    <>
      <Navbar className="navbar">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="64"
            height="64"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;
