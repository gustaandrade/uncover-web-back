import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import "./header.css";

import Logo from "../../assets/logo512.png";

const Header = () => {
  return (
    <>
      <Navbar className="navbar justify-content-between">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="64"
            height="64"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <div className="buttons">
          <Link to="/new-visitation">
            <button className="app-button">Cadastrar Visita</button>
          </Link>
          <Link to="/new-company">
            <button className="app-button">Cadastrar Empresa</button>
          </Link>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
