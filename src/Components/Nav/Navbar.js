import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import MainButton from '../MainButton/MainButton'


import Logo from '../../assets/Images/logo.png'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


const Navbars = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src={Logo} alt='Logo'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav navbar-toggle-button" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="my-link">Home</Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/aboutus">About Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ourteam">Our Team</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/faqs">FAQ's</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/booking">Booking</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/error404">Error 404</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login">Login / Register</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/services">Services</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services-details">Services Details</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="basic-nav-dropdown blog-dropdown">
                <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog-details">Blog Details</NavDropdown.Item>
              </NavDropdown>
              <Link to="/contactus" className="my-link">Contact Us</Link>
              <Link className='icon-search'><FontAwesomeIcon icon={faMagnifyingGlass} rotation={90}/></Link>
              <Link to="/contactus">
                <MainButton buttonText="Contact Us"/>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbars
