import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Header.css";

function Header() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="/">Recipe App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/browse">Browse</NavLink>
          <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
          <NavLink className="nav-link" to="/auth">Login/Register</NavLink>
          <NavLink className="nav-link" to="/ingredients">Find Recipes</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
