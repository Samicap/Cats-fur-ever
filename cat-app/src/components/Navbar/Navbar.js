import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function Navbar() {
  return (
    <div>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
           <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
           </Nav>
        </Container>
      </Navbar>
    </div>
  )
}