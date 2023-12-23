import React, { Fragment } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

import Logo from '../../assets/Images/ABlogo.svg'

import { useState } from 'react';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FaSun, FaMoon } from 'react-icons/fa'; // Dark mode and light mode icons


const Navbars = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Fragment>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src={Logo} className='w-100'/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav navbar-toggle-button" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="my-link">Home</Link>
              <Link to="/aboutus" className="my-link">About us</Link>
              <Link to="/aboutus" className="my-link">Product</Link>
             
             <Link to="/Category" className="my-link">Categories</Link>
              <NavDropdown title="Blog" id="basic-nav-dropdown blog-dropdown">
                <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog-details">Blog Details</NavDropdown.Item>
              </NavDropdown>
              <Link to="/contactus" className="my-link">Contact Us</Link>
              <Link className='icon-search' onClick={toggleDarkMode} >
              
              {darkMode ? <FaSun /> : <FaMoon />}</Link>
        
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default Navbars
