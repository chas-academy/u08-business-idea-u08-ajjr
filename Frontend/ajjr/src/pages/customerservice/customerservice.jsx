import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './customerservice.css';

const CustomerService = () => {
  return (
    <Container className="customer-service-container">
      <Row className="justify-content-center">
        <Col md={10} className="mb-5">
          <Card className="service-card">
            <Card.Body>
              <Card.Title>Leveransinformation</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                similique ea harum. Porro harum cum nam expedita culpa, ipsum at
                impedit blanditiis illum iste nostrum quia vel nisi. Laborum at
                accusantium nostrum cupiditate praesentium tempore qui vitae
                neque? Fugiat aspernatur deleniti assumenda, at voluptates
                eligendi adipisci et cum aut accusantium.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                similique ea harum. Porro harum cum nam expedita culpa, ipsum at
                impedit blanditiis illum iste nostrum quia vel nisi. Laborum at
                accusantium nostrum cupiditate praesentium tempore qui vitae
                neque? Fugiat aspernatur deleniti assumenda, at voluptates
                eligendi adipisci et cum aut accusantium.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} className="mb-5">
          <Card className="service-card">
            <Card.Body>
              <Card.Title>Retur & Byten</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                similique ea harum. Porro harum cum nam expedita culpa, ipsum at
                impedit blanditiis illum iste nostrum quia vel nisi. Laborum at
                accusantium nostrum cupiditate praesentium tempore qui vitae
                neque? Fugiat aspernatur deleniti assumenda, at voluptates
                eligendi adipisci et cum aut accusantium.
                
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                similique ea harum. Porro harum cum nam expedita culpa, ipsum at
                impedit blanditiis illum iste nostrum quia vel nisi. Laborum at
                accusantium nostrum cupiditate praesentium tempore qui vitae
                neque? Fugiat aspernatur deleniti assumenda, at voluptates
                eligendi adipisci et cum aut accusantium.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerService;
