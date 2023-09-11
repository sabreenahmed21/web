import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import '../StyledComponent/App.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <NavLink to="/">
          <img src={Logo} alt="img"  />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <HashLink to="/#latest">Latest Builds</HashLink>
            <HashLink to="/#process">Process</HashLink>
            <HashLink to="/#service">Services</HashLink>
            <HashLink to="/#contact">Contact Us</HashLink>
            <NavLink to="/projects">Projects</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
