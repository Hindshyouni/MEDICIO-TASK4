import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { GrLocation } from "react-icons/gr";
import './ContactCard.css'

const ContactCard = () => {
  return (
    <div>
        <Row className='pb-3'>
        <Card className='d-flex align-items-center flex-column  justify-content-center box-shadows'   border="light" style={{ width: '25rem' }}>
       <div className='p-3 round fs-2 icon-color d-flex align-items-center justify-content-center'> <GrLocation /></div>
        <Card.Body className='d-flex align-items-center flex-column  justify-content-center'>
          <Card.Title>Address</Card.Title>
          <Card.Text>
           A108 Adam Street, New Yourk,NY 535022
          </Card.Text>
        </Card.Body>
      </Card>    
        </Row>
        <Row>
        <Card className='d-flex align-items-center flex-column  justify-content-center box-shadows'   border="light" style={{ width: '25rem' }}>
       <div className='p-3 round fs-2 icon-color d-flex align-items-center justify-content-center'> <GrLocation /></div>
        <Card.Body className='d-flex align-items-center flex-column  justify-content-center'>
          <Card.Title>Address</Card.Title>
          <Card.Text>
           A108 Adam Street, New Yourk,NY 535022
          </Card.Text>
        </Card.Body>
      </Card>    
        </Row>
     
    </div>
  )
}

export default ContactCard