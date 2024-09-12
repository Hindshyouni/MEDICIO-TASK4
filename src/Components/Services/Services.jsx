import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaHeartbeat } from "react-icons/fa";
import { FaBuildingUser, FaHelicopterSymbol } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { TbLibraryPlus } from "react-icons/tb";
import Tittle from "../Tittle/Tittle";
import './Services.css'

const Services = () => {
  const service = [
    {
      icon: <FaHeartbeat />,
      h2: "Nesciunt Mete",
      text: "lorem Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur ",
    },
    {
      icon: <FaHelicopterSymbol />,
      h2: "Eosle Commondi",
      text: "lorem Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur ",
    },
    {
      icon: <FaBuildingUser />,
      h2: "Ledo Markt",
      text: "lorem Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur ",
    },
    {
      icon: <FaBuildingUser />,
      h2: "Asperirores Commodit",
      text: "lorem Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur ",
    },
    {
      icon: <BiSolidInjection />,
      h2: "Velit Doloremque",
      text: "lorem Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur",
    },
    {
      icon: <TbLibraryPlus />,
      h2: "Dolori Architecto",
      text: "lorem Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur",
    },
  ];
  return (
    <div>
      <Container className="pt-5">
        <Tittle
          tittle="Services"
          text1="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur velut"
        />

        <Row className="d-flex flex-wrap ">
          {service.map((element, index) => {
            return (
              <Col xs={12} md={4}  key={index} className="my-3">
                <Card className="text-center d-flex align-items-center border-0 ">
                  <div className="w-25 h-25  rounded-circle bg-light box-shadows  py-3 my-2 ">
                    <div className="icon-color  fs-3 d-flex align-items-center justify-content-center ">{element.icon}</div>
                  </div>
                  <Card.Body>
                    <div className="bb d-flex align-items-center justify-content-center  ">
                    <Card.Title className="text-color text-center py-1" >{element.h2}</Card.Title></div>
                    <Card.Text className="text-color py-3">{element.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
