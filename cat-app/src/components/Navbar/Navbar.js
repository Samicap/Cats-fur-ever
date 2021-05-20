import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
           <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/form'>Form</Nav.Link>
            <Nav.Link href='/cats'>Cats</Nav.Link>
           </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}