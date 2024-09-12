import React from 'react';
import Tittle from '../Tittle/Tittle';
import aboutimg from '../../assets/new/about.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCheckDouble } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <Container className=" mb-5">
        <Tittle tittle="About Us"
          text1="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur velut" />
        <Row className='g-3 py-5'>
          <Col xs={12} md={6}>
            <img className='w-100 h-100' src={aboutimg} alt="aboutimg" />
          </Col>
          <Col xs={12} md={6} className='d-flex flex-column align-items-start justify-content-between'>
            <h2>Voluptatem dignissioms provideent quasi corprise Voluptatem sit assumenda</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi vero nesciunt voluptatum distinctio deleniti quis dignissimos asperiores pariatur libero laudantium, temporibus ad voluptatem obcaecati expedita perferendis voluptate excepturi sequi officiis.</p>
            <div className='mb-3'><FaCheckDouble className='icon-color me-2' /><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span></div>
            <div className='mb-3'><FaCheckDouble className='icon-color me-2' /><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span></div>
            <div className='mb-3'><FaCheckDouble className='icon-color me-2' /><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem modi maxime? Iure porro, sit non, dicta expedita aut unde nam atque veniam nemo tempora eos tempore illo omnis. Voluptatum.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;