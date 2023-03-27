import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Typebar from '../components/Typebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cards = () => {
  return (
    <Container>
      <Row>
        <Col>
        <Typebar/>
        </Col>
      </Row>
    </Container>
  )
}


export default Cards;
