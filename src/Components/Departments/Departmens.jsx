import React, { useState } from 'react'
import InformationDepartment from '../InformationDepartment/InformationDepartment';
import DepartmentImg from '../DepartmentImg/DepartmentImg'
import Lista from '../Lista/Lista'
import { Col, Container, Row } from 'react-bootstrap';
import Tittle from "../Tittle/Tittle";

const Departmens = () => {
    const [selectDeal, setSelectDeal] = useState ("Ophthalmologists");
  return (
    <div>
        <Container className='pt-5'>
        <Tittle
          tittle="Departments"
          text1="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consecetur velut"
        />

                <Row className="align-items-start d-flex justify-content-center">
                    <Col xs={12} md={4} lg={4}>
                        <Lista setSelectDeal={setSelectDeal}/>
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <Row className="g-0">
                            <Col xs={12} md={6} lg={6}>
                                <InformationDepartment selectDeal={selectDeal}/>
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <DepartmentImg  selectDeal={selectDeal}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export default Departmens