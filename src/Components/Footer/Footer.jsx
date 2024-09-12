import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import './Footer.css'

const Footer = () => {
  const footerr1 = [
   
    /*<FaFacebook /> <FaInstagram /> <FaLinkedin /> <FaThreads /> */
    
   {  tit: "Useful Link",span1: "Home",span2: "About us",span3: "Servicec",span4: "Term of servives",span5: "Privacy Policy ",},
   {  tit: "Our Services",span1: "Web Design",span2: "Web Development",span3: "Marketing",span4: "Product Managment", span5: "Graghic Design",},
   {  tit: "Hic solutasetp",span1: "A108AdamStreet",span2: "NewYourk,NY535022",span3: "Phone:+1 5589 5548855",span4: "Email:info@example.com",span5: "laudantium dolorum",},
   {  tit: "Nobis illum",span1: "ipsum",span2: "laudantium dolorum",span3: "Dinera",span4: "Trodelas",span5: "Flexo ",},
    
   ];
    
  return (
    <div className="doctor-bg-color py-5">
       <Container>
      <Row className="d-flex align-items-center justify-content-around">
      <Col className="gap-3 d-flex align-items-start justify-content-start" xs={12} sm={6} md={4} lg={3} xl={2} >
      <ul className="list-group list-group-flush border-0 bg-transparent ">
                <li className="list-group-item  border-0 bg-transparent"><h1>Medico</h1></li>
                <li className="list-group-item border-0 bg-transparent">A108AdamStreet</li>
                <li className="list-group-item border-0 bg-transparent">NewYourk,NY535022</li>
                <li className="list-group-item border-0 bg-transparent"><span className="fw-bold">Phone:</span>+1 5589 5548855</li>
                <li className="list-group-item border-0 bg-transparent"><span className="fw-bold">Email:</span>info@example.com</li>
                <li className="list-group-item border-0 bg-transparent"><div className="d-flex align-items-center justify-content-around  "><div className="border rounded-circle p-2" > <FaFacebook className="fs-2" /></div> <div className="border rounded-circle p-2 "> <FaInstagram  className="fs-2"/></div> <div className="border rounded-circle p-2 "><FaLinkedin className="fs-2"  /></div> <div className="border rounded-circle p-2"><FaThreads className="fs-2"  /></div></div></li>
              </ul>
      </Col>
        {footerr1.map((element, index) => {
          return (
            <Col className="gap-3 d-flex align-items-start justify-content-start" xs={12} sm={6} md={4} lg={3} xl={2}    key={index}>
              <ul className="list-group list-group-flush border-0 bg-transparent ">
                <li className="list-group-item  border-0 bg-transparent"><h4>{element.tit}</h4></li>
                <li className="list-group-item border-0 bg-transparent">{element.span1}</li>
                <li className="list-group-item border-0 bg-transparent">{element.span2}</li>
                <li className="list-group-item border-0 bg-transparent">{element.span3}</li>
                <li className="list-group-item border-0 bg-transparent">{element.span4}</li>
                <li className="list-group-item border-0 bg-transparent">{element.span5}</li>
              </ul>
            </Col>
          );
        })}
      </Row>
      <p className="px-5 py-4 text-center h-border  ">
        <p> © Copyright Medicio All Rights Reserved </p> Designed by {" "}
         
            <span className="shind"> HINDSAHYOUNI</span>
        </p>
      </Container>

    
    </div>
  );
};

export default Footer;
