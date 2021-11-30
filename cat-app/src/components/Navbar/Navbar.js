import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./Navbar.scss";

export default function Navigation() {
  return (
      <Navbar
        collapseOnSelect
        // fixed="top"
        // the fixed position results in the conent being covered
        expand="lg"
        className="navbar"
      >

          <Navbar.Brand href="/" className="cat-logo" >
            <img alt="cat logo" src="images/cat.png"/>
            Cats-Fur-Ever!!!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link href="/catBreedInfo" className="nav-catBreedInfo-link">
                Breed Info
              </Nav.Link>
              <Nav.Link href="/" className="nav-home-link">
                Home
              </Nav.Link>
              <Nav.Link href="/cats" className="nav-random-cat-link">
                Random Cat!
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
  
      </Navbar>
  );
}
