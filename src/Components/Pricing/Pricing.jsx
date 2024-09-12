import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Tittle from "../Tittle/Tittle";
import './Pricing.css'

const Pricing = () => {
  const price = [
    {
      head: "free",
      span: "0/month",
      text1: "Aida dere",
      text2: "Nec feugiat",
      text3: "Null at volutpal dolo",
      text4: "Pharace massa",
      text5: "Pleace massa",
      btn: "Buy Now",
    },
    {
      head: "Business",
      span: "19/month",
      text1: "Aida dere",
      text2: "Nec feugiat",
      text3: "Null at volutpal dolo",
      text4: "Pharace massa",
      text5: "Pleace massa",
      btn: "Buy Now",
    },
    {
      head: "Developer",
      span: "29/month",
      text1: "Aida dere",
      text2: "Nec feugiat",
      text3: "Null at volutpal dolo",
      text4: "Pharace massa",
      text5: "Pleace massa",
      btn: "Buy Now",
    },
    {
      head: "Ultimate",
      span: "49/month",
      text1: "Aida dere",
      text2: "Nec feugiat",
      text3: "Null at volutpal dolo",
      text4: "Pharace massa",
      text5: "Pleace massa",
      btn: "Buy Now",
    },
  ];
  return (
    <div className="pb-5">
      <Container>
        <Tittle
          tittle="Pricing"
          text1="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur velut"
        />

        <Row>
          {price.map((element, index) => {
            return (
              <Col xs={12} md={6} lg={3} key={index} >
                <Card className="text-center rounded border-white box-shadows1 py-3">
                  <Card.Header className="pricehead"><h4 >{element.head}</h4></Card.Header>
                  <Card.Body >
                    <Card.Title ><span >$</span>{element.span}</Card.Title>
                    <Card.Text>
                    {element.text1}
                    </Card.Text>
                    <Card.Text>
                    {element.text2}
                    </Card.Text>
                    <Card.Text>
                    {element.text3}
                    </Card.Text>
                    <Card.Text>
                    {element.text4}
                    </Card.Text>
                    <Card.Text>
                    {element.text5}
                    </Card.Text>
                    
                  </Card.Body>
                  <Card.Footer className="text-muted"><Button variant="primary bg-primary-color border-0 px-4 ">{element.btn}</Button></Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
