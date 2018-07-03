import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { LoginModal } from './Home/LoginModal';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect id="navBar">
        <Navbar.Header>
          <Navbar.Brand >
                    <Link to={'/'} id="brand">VotingApp.Web</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
           <Nav pullRight>
               <LoginModal />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
