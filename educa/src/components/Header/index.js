import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './header.css';

import Logo from '../../assets/logo512.png';

const Header = () => {
  return (
    <>
      <Navbar className="navbar justify-content-between">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="64"
            height="64"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Button variant="primary" size="lg">Cadastrar</Button>
      </Navbar>
    </>
  );
};

export default Header;
