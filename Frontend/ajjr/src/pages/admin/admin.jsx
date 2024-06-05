import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./admin.css";

function AdminPage() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: null,
    topNotes: "",
    middleNotes: "",
    baseNotes: "",
    quantity: null,
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

    const formData = new FormData();
    for (const [key, value] of Object.entries(product)) {
      formData.append(key, value);
    }
    /* for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    } */
    if (
      product.name &&
      product.description &&
      product.category &&
      product.price &&
      product.topNotes &&
      product.middleNotes &&
      product.baseNotes &&
      product.quantity
    ) {
      fetch("http://localhost:3000/api/products", {
        method: "post",
        mode: "cors",
        /*  headers: {
           "Content-Type": "multipart/form-data"
         }, */
        body: formData,
      });
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
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Beskrivning</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Kategori</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pris</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Top noter</Form.Label>
                <Form.Control
                  type="text"
                  name="topNotes"
                  value={product.topNotes}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mellan noter</Form.Label>
                <Form.Control
                  type="text"
                  name="middleNotes"
                  value={product.middleNotes}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bas noter</Form.Label>
                <Form.Control
                  type="text"
                  name="baseNotes"
                  value={product.baseNotes}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Antal i Lager</Form.Label>
                <Form.Control
                  type="number"
                  name="quantity"
                  value={product.quantity}
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
