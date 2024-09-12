import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { FaHeartbeat } from "react-icons/fa";
import Cards from '../Cards/Cards';
import './Section2.css';

const cards = [
  {
    icon1: <FaHeartbeat style={{ color: 'var(--icon-color)' }} />,
    title: "Lorem Ipsum",
    text: "Some quick example text to build on the card title and make up thes content."
  },
  {
    icon1: <FaHeartbeat style={{ color: 'var(--icon-color)' }} />,
    title: "sed ut perspici",
    text: "Some quick example text to build on the card title and make up thes content."
  },
  {
    icon1: <FaHeartbeat style={{ color: 'var(--icon-color)' }} />,
    title: "Magni Dolores",
    text: "Some quick example text to build on the card title and make up thes content."
  },
  {
    icon1: <FaHeartbeat style={{ color: 'var(--icon-color)' }} />,
    title: "Nemo Enim",
    text: "Some quick example text to build on the card title and make up thes content."
  }
];

const Section2 = () => {
  return (
    <Container className='my-5 container-fluid'>
    <div >
      <Row  className='g-3'>
        {cards.map((element) => (
          <Cards
            key={element.title} 
            icon1={element.icon1}
            title={element.title}
            text={element.text}
          />
        ))}
      </Row>
    </div>
    </Container>
  );
};

export default Section2;