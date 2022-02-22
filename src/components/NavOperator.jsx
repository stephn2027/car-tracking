import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function NavOperator({ user, logout }) {
  return (
    <Navbar bg="light" variant="light" className="navbar fixed-top">
      <Container>
        <Navbar.Brand className="justify-content-end">
          <h5>Welcome, {user.name} </h5>
        </Navbar.Brand>
        <Nav defaultActiveKey="/" className="nav">
          <NavLink to="/" className="nav-links"></NavLink>

          <NavLink to="/" onClick={logout} className="nav-links">
            Logout
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
