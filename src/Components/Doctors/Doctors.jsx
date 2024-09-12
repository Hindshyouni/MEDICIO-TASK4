import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Tittle from "../Tittle/Tittle";
import "./Doctor.css";
import imgdoctor1 from '../../assets/doctors/doctors-1.jpg'
import imgdoctor2 from '../../assets/doctors/doctors-2.jpg'
import imgdoctor3 from '../../assets/doctors/doctors-3.jpg'
import imgdoctor4 from '../../assets/doctors/doctors-4.jpg'

const Doctors = () => {

    const doctor =[{img:imgdoctor1,doctortitle: "Walter White",spandoctor:"Chief Medicine Office" },
                   {img:imgdoctor2,doctortitle: "WSarah Jhonson",spandoctor:"Anesthesiologist" },
                   {img:imgdoctor3,doctortitle: "William Anderson",spandoctor:"Cardiology" },
                   {img:imgdoctor4,doctortitle: "Amanda Jepson",spandoctor:"Neurosurgeon" },
                ]
        

  return (
    <div className="doctor-bg-color">
      <Container className="p-0  mb-5">
        <Tittle
          tittle="Doctors"
          text1="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur velut"
        />

        <Row>
            {doctor.map((element , index) =>
            {
                return(
            <Col className="d-flex align-items-center justify-content-center py-3" ker={index}>
            <Card className="doctor-bg-color" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={element.img} />
              <Card.Body>
                <Card.Title>{element.doctortitle}</Card.Title>
                <Card.Text>
                  {element.spandoctor}
                </Card.Text>
              </Card.Body>
             
             
            </Card>
          </Col>
                )
            })}
          
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
