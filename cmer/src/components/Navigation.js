import React, { Component } from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem,  } from 'react-bootstrap';

class Navigation extends Component {
    render() {
      return (
        <Navbar fixedTop inverse collapseOnSelect className="Navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CMER Playlist</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="Nav">
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#About">About</NavItem>
            <NavItem eventKey={3} href="#">Contact</NavItem>
            <NavDropdown eventKey={4} title="More" id="nav-dropdown">
              <MenuItem eventKey={4.1}>Profile</MenuItem>
              <MenuItem eventKey={4.2}>Settings</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.3}>API</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>  
    );
  }
};

export default Navigation;