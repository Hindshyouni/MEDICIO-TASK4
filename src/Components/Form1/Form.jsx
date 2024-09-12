import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import Tittle from '../Tittle/Tittle'
import './Form1.css'

const Form1 = () => {
  return (
    <div className='form-color py-2'>
      <Container>
        <Tittle tittle="MAKE AN APPOINTMENT"
          text1="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur velut" />
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          
          <Form.Control type="email" placeholder="Your Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        
          <Form.Control type="password" placeholder="Your email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          
          <Form.Control type="password" placeholder="Your Phone" />
        </Form.Group>
      </Row>



     

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          
          <Form.Control />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridState">
          
          <Form.Select defaultValue="Select Department">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="fSelect Doctor">
         
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

       
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
        <FloatingLabel controlId="floatingTextarea2" label="Message (Optional)">
        <Form.Control
          as="textarea"
          placeholder="Message (Optional)"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
         
        </Form.Group>
        </Row>

    
    <div className='d-flex align-items-center justify-content-center'>
        <Button className=" bg-primary-color px-5 border-0 " variant="primary" type="submit">
        Make an Appointment
      </Button>
      </div>
     
    </Form>
    </Container>
    </div>
  )
}

export default Form1