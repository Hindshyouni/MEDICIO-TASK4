import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaAward } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { RiLuggageDepositFill } from "react-icons/ri";
import { ImLab } from "react-icons/im";

const CardAbout = () => {
  const department = [
    { icon1: <FaUserDoctor />, span: "25", person: "Doctors" },
    { icon1: <RiLuggageDepositFill  />, span: "15", person: "Department" },
    { icon1: <ImLab  />, span: "8", person: "ResarshLab" },
    { icon1: <FaAward />, span: "150", person: "Awards" },
  ];
  return (
    
    <Container  className="p-0 py-5">
        <Row className="g-5 d-flex align-items-center">
           {department.map((element , index) =>{return( 
           <Col key={index} xs={12} md={6} lg={3} className=" d-flex align-items-center">
            <Card className="m-auto w-75 border-0 box-shadows" >
              <Card.Body className="d-flex align-items-center justify-content-around g-0" >
                <Card.Title className="icon-color fs-1">{element.icon1}</Card.Title>
                <div className="d-flex align-items-center flex-column">
                <Card.Subtitle className="mb-2 text-muted">
                    <div >
                     <h2 className="fw-bold"> {element.span}</h2>
                 </div>
                 <div>
                 {element.person}
                 </div>
                </Card.Subtitle>
                </div>
               
           
              </Card.Body>
            </Card>
          </Col>

           )})} 
         
        </Row>
      </Container>
   
  );
};

export default CardAbout;

