import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.firstName ||
      !formData.lastName
    ) {
      alert("Alla fält måste fyllas i.");
      return;
    }

  
    if (formData.password !== formData.confirmPassword) {
      alert("Lösenorden matchar inte.");
      return;
    }


    registerUser(formData);
  };

  const registerUser = async (userData) => {
    console.log("Försöker registrera användare:", userData);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Något gick fel vid registreringen");
      }

      const data = await response.json();
      console.log("Registrering lyckades:", data);
      alert("Registrering lyckades!");
    } catch (error) {
      console.error("Registrering misslyckades:", error);
      alert("Registrering misslyckades. Försök igen senare.");
    }
  };

  return (
    <div className="backgroundstyle">
      <Container className="formulor ">
        <Card className="registercard w-100">
          <Card.Body>
            <Card.Title className="text-center mb-4">Registrera dig</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>Förnamn</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ange förnamn"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Efternamn</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ange efternamn"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-postadress</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ange e-postadress"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Lösenord</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Lösenord"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Bekräfta lösenord</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Bekräfta lösenord"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Registrera
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default RegisterPage;
