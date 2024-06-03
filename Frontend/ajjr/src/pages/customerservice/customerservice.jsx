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
                På Ajjr erbjuder vi fri frakt inom Sverige för att göra din shoppingupplevelse så smidig som möjligt. Våra produkter levereras direkt till din brevlåda inom 3-5 arbetsdagar efter att du har gjort din beställning. Vi förstår hur viktigt det är att få dina varor snabbt och på ett bekvämt sätt. Om ditt paket skulle dröja, tveka inte att kontakta oss så hjälper vi dig gärna med att spåra och lösa ärendet.
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
                Vi på Ajjr vill att du ska vara helt nöjd med ditt köp. Om du av någon anledning skulle behöva returnera eller byta en produkt, erbjuder vi möjligheten att göra det under förutsättning att produkten är kvar i sin originalförpackning och inte har öppnats eller använts. Vid en eventuell retur eller byte står du som kund för fraktkostnaden. Kontakta oss gärna för att få hjälp med returprocessen, så ser vi till att allt går så smidigt som möjligt
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} className="mb-5">
          <Card className="service-card">
            <Card.Body>
              <Card.Title>Kundtjänst och Support</Card.Title>
              <Card.Text>
                Om du har några frågor eller behöver hjälp med din beställning, är du alltid välkommen att kontakta oss. Du kan nå oss via e-post eller genom våra sociala medier, där vårt supportteam står redo att svara på dina frågor och ge dig den hjälp du behöver. Vi strävar efter att ge snabb och effektiv kundservice för att säkerställa att du får den bästa möjliga upplevelsen hos Ajjr. Tveka inte att höra av dig – vi finns här för att hjälpa dig!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerService;
