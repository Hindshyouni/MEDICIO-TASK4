import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navbar.css'

const NavBar = ({ logo, items, dropdownItems, contactItem ,btn }) => {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary fixed-top w-100">
      <Container fluid className='justify-content-evenly'>
        <Navbar.Brand href="#" ><img className='w-50' src={logo?.img1} alt="logo" /></Navbar.Brand>
       
       <div className='order-3'>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Button  className="rounded-pill bg-primary-color border-0" variant="primary order-4">{btn}</Button>
        </div>
        <Navbar.Collapse id="navbarScroll" className='flex-grow-0'>
        
          <Nav
            className="me-auto my-2 my-lg-0 gap-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {Array.isArray(items) ? 
              items.map((element, index) => (
                <Nav.Link key={index} href={`#${element?.id}`}>
                  {element?.name}
                </Nav.Link>
              )) : null
            }

            <NavDropdown title="DROPDOWN" id="navbarScrollingDropdown">
              {Array.isArray(dropdownItems) ? 
                dropdownItems.map((item, index) => (
                  <NavDropdown.Item key={index} href={`#${item.id}`}>
                    {item.name}
                  </NavDropdown.Item>
                )) : null
              }
            </NavDropdown>

            {Array.isArray(contactItem) ? 
              contactItem.map((item, index) => (
                <Nav.Link key={index} href={`#${item.id}`}>
                  {item.name}
                </Nav.Link>
              )) : null
            }
            
          </Nav>
          
        </Navbar.Collapse>
        
        
        
      </Container>
      
    </Navbar>
  )
};

export default NavBar