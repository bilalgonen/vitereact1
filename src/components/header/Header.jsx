import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg='dark'
        data-bs-theme='dark'
        className='navbar-expand-sm mb-4'
      >
        <Container>
          <Navbar.Brand href='#home'>Atlantic IT Solutions</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#services'>Services</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
