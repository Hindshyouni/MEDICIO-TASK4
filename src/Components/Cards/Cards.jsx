import React from 'react'
import { Col ,Card} from 'react-bootstrap'
import './Cards.css'

const Cards = ({ icon1, title, text }) => {
  return (
    <Col col={12} sm={6} md={4} lg={3}  className='d-flex align-items-center justify-content-center '>
    <Card className='d-flex align-items-center justify-content-center py-3 px-3 my-2 mb-3 border box-shadows' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='mb-4'> {icon1}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted fw-bold text-secondary">{title}</Card.Subtitle>
        <Card.Text className='text-secondary'>
        {text}
        </Card.Text>
     
      </Card.Body>
    </Card>
 </Col>
  )
}

export default Cards

