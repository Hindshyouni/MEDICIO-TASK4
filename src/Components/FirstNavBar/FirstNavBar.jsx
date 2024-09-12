import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import './FirstNavBar.css'

const FirstNavBar = () => {
  return (
    <Navbar className="bg-body-tertiary bg-primary-color">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Monday-Saturday, 8AM to 10PM</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-white'>
            Call Us Now +1 5589 55488 55
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default FirstNavBar