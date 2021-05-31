import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Navbar.css';

export default function Navigation() {
  return (
    <div>
      <Navbar fixed='top' bg='dark' variant='dark' className="navbar">
        {/* <Container>
          <Navbar.Toggle  />
          <Navbar.Collapse id='responsive-navbar-nav'>
           <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/form'>Form</Nav.Link>
            <Nav.Link href='/cats'>Cats</Nav.Link>
           </Nav>
          </Navbar.Collapse>
        </Container> */}
        
        <Nav>
          <Nav.Link href="/form"> Form</Nav.Link>
          <Nav.Link href="/"> Home</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}