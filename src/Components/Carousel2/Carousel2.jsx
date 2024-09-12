import React from "react";
import { Carousel, Card, Container, Col, Row } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";

import "./Carousel.css";
import img1 from "../../assets/testimonials/testimonials-1.jpg";
import img2 from "../../assets/testimonials/testimonials-2.jpg";
import img3 from "../../assets/testimonials/testimonials-3.jpg";
import img4 from "../../assets/testimonials/testimonials-4.jpg";
import img5 from "../../assets/testimonials/testimonials-5.jpg";
import Tittle from "../Tittle/Tittle";

const Carousel2 = () => {
  
    
    const personCard1 = [ { text: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet...",image: img1,title: "Jena Carles",role: "stone owner", },
                          {text: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet...",image: img2,title: "Matt Brandom",role: "Freelancer",},
                          {text: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet...",image: img3,title: "John Larson",role: "Enterpreneur",},
                        ];
                       
   
    const personCard2 = [ { text: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet...",image: img4,title: "Jena Carles",role: "stone owner", },
                        {text: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet...",image: img5,title: "Matt Brandom",role: "Freelancer",},
                        {text: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet...",image: img1,title: "John Larson",role: "Enterpreneur",},
                        ];
     
                        
     const personCard3 = [ { text: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet...",image: img2,title: "Jena Carles",role: "stone owner", },
                        {text: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet...",image: img1,title: "Matt Brandom",role: "Freelancer",},
                        {text: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet...",image: img5,title: "John Larson",role: "Enterpreneur",},
                        ];
      

 return (
    <div>
      <Container className="py-2  mb-5">
        <Tittle
          tittle="Testimonials"
          text1="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur velut"
        />
        <Carousel className="py-5">
          <Carousel.Item>
            <Row>
              {personCard1.map((element, index) => (
                <Col xs={12} md={4} key={index} className="mb-4">
                  <Card key={index} className="border-0  ">
                    <Card.Text className="p-4 bg-light m-0 box-height fst-italic  text-black-50">
                      <FaQuoteLeft className="me-2 icon-color" /> {element.text}
                      <FaQuoteLeft className="ms-2 icon-color" />
                    </Card.Text>
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={element.image}
                        className="rounded-circle h-25 w-25 image-box imgposition "
                      />
                      <Card.Title>{element.title}</Card.Title>
                      <span className="text-muted">{element.role}</span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              {personCard2.map((element, index) => (
                <Col xs={12} md={4} key={index} className="mb-4">
                  <Card key={index} className="border-0  ">
                    <Card.Text className="p-4 bg-light m-0 box-height fst-italic  text-black-50">
                      <FaQuoteLeft className="me-2 icon-color" /> {element.text}
                      <FaQuoteLeft className="ms-2 icon-color" />
                    </Card.Text>
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={element.image}
                        className="rounded-circle h-25 w-25 image-box imgposition"
                      />
                      <Card.Title>{element.title}</Card.Title>
                      <span className="text-muted">{element.role}</span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              {personCard3.map((element, index) => (
                <Col xs={12} md={4} key={index} className="mb-4">
                  <Card key={index} className="border-0  ">
                    <Card.Text className="p-4 bg-light m-0 box-height fst-italic  text-black-50">
                      <FaQuoteLeft className="me-2 icon-color" /> {element.text}
                      <FaQuoteLeft className="ms-2 icon-color" />
                    </Card.Text>
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={element.image}
                        className="rounded-circle h-25 w-25 image-box imgposition"
                      />
                      <Card.Title>{element.title}</Card.Title>
                      <span className="text-muted">{element.role}</span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Carousel2;
