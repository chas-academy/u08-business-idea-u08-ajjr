import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./admin.css";

function AdminPage() {
  const [product, setProduct] = useState({
    namn: "",
    beskrivning: "",
    pris: "",
    topNoter: "",
    mellanNoter: "",
    basNoter: "",
    antal: "",
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

    const formData = new FormData()
    for (const [key, value] of Object.entries(product)) {
      formData.append(key, value)
    }
    /* for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    } */
    if (product.namn && product.beskrivning && product.pris && product.topNoter && product.mellanNoter && product.basNoter && product.antal) {
      fetch("http://localhost:3000/api/products", {
        method: "post",
        mode: "cors",
        /*  headers: {
           "Content-Type": "multipart/form-data"
         }, */
        body: formData,
      })
    }
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
                <Form.Label>Produkt namn</Form.Label>
                <Form.Control
                  type="text"
                  name="namn"
                  value={product.namn}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Beskrivning</Form.Label>
                <Form.Control
                  type="text"
                  name="beskrivning"
                  value={product.beskrivning}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pris</Form.Label>
                <Form.Control
                  type="text"
                  name="pris"
                  value={product.pris}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Top noter</Form.Label>
                <Form.Control
                  type="text"
                  name="topNoter"
                  value={product.topNoter}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mellan noter</Form.Label>
                <Form.Control
                  type="text"
                  name="mellanNoter"
                  value={product.mellanNoter}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bas noter</Form.Label>
                <Form.Control
                  type="text"
                  name="basNoter"
                  value={product.basNoter}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Antal i Lager</Form.Label>
                <Form.Control
                  type="number"
                  name="antal"
                  value={product.antal}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
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
