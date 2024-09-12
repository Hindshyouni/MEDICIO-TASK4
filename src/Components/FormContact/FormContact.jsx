import React from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'

const FormContact = () => {
  return (
    <div>
         <Form>
      <Row className='py-3'>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Row className='py-3'>
      <Col>
          <Form.Control placeholder="First name" />
        </Col>
      </Row>

      <Row className="mb-3 py-3">
        <Col>
        <Form.Group  controlId="formGridCity">
        <FloatingLabel controlId="floatingTextarea2" label="Message (Optional)">
        <Form.Control
          as="textarea"
          placeholder="Message (Optional)"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
         
        </Form.Group>
        </Col>
        </Row>

      <div className='d-flex align-items-center justify-content-center'>
        <Button className=" bg-primary-color px-5 border-0 " variant="primary" type="submit">
        Make an Appointment
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default FormContact