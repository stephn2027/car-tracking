import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function NavBar({ user, logout }) {
  return (
    <Navbar bg="light" variant="light" className='navbar fixed-top'>
      <Container >
        <Navbar.Brand className="justify-content-end">
          <h5>Welcome, {user.name} </h5>
        </Navbar.Brand>
        <Nav defaultActiveKey="/" className="nav" >
          <NavLink to="/" className="nav-links">
            City
          </NavLink>

          <NavLink to="/customer" className="nav-links">
            Customer
          </NavLink>

          <NavLink to="/car" className="nav-links">
            Cars
          </NavLink>

          <NavLink to="/tracking" className="nav-links">
            Tracking
          </NavLink>

          <NavLink to="/logout" onClick={logout} className="nav-links">
            Logout
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
