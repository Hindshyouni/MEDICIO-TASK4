import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactCard from '../ContactCard/ContactCard'
import FormContact from '../FormContact/FormContact'
import Tittle from '../Tittle/Tittle'
import './Contact.css'

const Contact = () => {
  return (
    <div className='py-4'>

        <Container>
        <Tittle tittle="Contct"
          text1="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur velut" />
          </Container>

          <iframe className='gmap' width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>


          <Container>
           <Row className='d-flex align-items-center justify-content-center'>
            <Col xs={12} md={6}>
         <ContactCard />
         </Col>
         <Col xs={12} md={6}>
         <FormContact />
         </Col>
         </Row>
          </Container>
    </div>
  )
}

export default Contact