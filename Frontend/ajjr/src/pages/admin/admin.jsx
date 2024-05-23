import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./admin.css";

function AdminPage() {
  const [product, setProduct] = useState({
    artikelnummer: "",
    namn: "",
    ordPris: "",
    dofter: "",
    antalILager: "",
    rabatt: "",
  });

  //Hantera produkt/textuppladdning
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  //Hantera filuppladdning, bilder
  const handleFileChange = (event) => {
    setProduct({
      ...product,
      image: event.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting product", product);
    alert("Information submitted. Check console for data.");
  };

  return (
    <div className="backgroundstyle">
      <Container className="formulor">
        <Card className="registercard w-100">
          <Card.Body>
            <Card.Title className="text-center mb-4">
              Lägg till Produkt{" "}
            </Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Artikelnummer</Form.Label>
                <Form.Control
                  type="text"
                  name="artikelnummer"
                  value={product.artikelnummer}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Namn</Form.Label>
                <Form.Control
                  type="text"
                  name="namn"
                  value={product.namn}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ord.Pris</Form.Label>
                <Form.Control
                  type="text"
                  name="ordPris"
                  value={product.ordPris}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Dofter</Form.Label>
                <Form.Control
                  type="text"
                  name="dofter"
                  value={product.doftar}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Antal i Lager</Form.Label>
                <Form.Control
                  type="number"
                  name="antalILager"
                  value={product.antalILager}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rabatt</Form.Label>
                <Form.Control
                  type="text"
                  name="rabatt"
                  value={product.rabatt}
                  onChange={handleChange}
                  required
                />
                <Form.Group className="mb-3">
                  <Form.Label>Produktbild</Form.Label>
                  <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Lägg till produkt
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default AdminPage;
