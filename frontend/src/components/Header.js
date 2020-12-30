import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <Navbar expand='lg' collapseOnSelect>
        <Container>
          {/* <Image
            src={logo}
            style={{ width: '80px', height: '80px' }}
            roundedCircle
          /> */}
          <LinkContainer to='/'>
            <h2>MadBurger</h2>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
