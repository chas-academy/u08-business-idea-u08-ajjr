import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';

function RegisterPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implementera validering och hantering här
        console.log('Form Data Submitted:', formData);
    };
    return (

             // skapat en registrerings formulär
        <div className="register-background"> 
            <Container>
                <Card style={{ width: '24rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <Card.Body>
                        <Card.Title className="text-center mb-4">Registrera dig</Card.Title>
                        <Form onSubmit={handleSubmit}>
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