import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../assets/new/features.jpg'
import AboutSection2Text from '../AboutSection2Text/AboutSection2Text'

const AboutSection2 = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col  lg={6}  >
                <div className='w-100 h-100' ><img className='w-100 h-100'  src={img}/></div>
                </Col>

                <Col  lg={6} >
                <AboutSection2Text/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AboutSection2