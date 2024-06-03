import React, { useState, useEffect } from "react";
import { Container, Form, Button, Table, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./my-account.css";

function MyAccount() {
  const [orders, setOrders] = useState([]);
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("https://u08-business-idea-u08-ajjr-39gd.onrender.com/api/orders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log("orderdata", data);

      if (Array.isArray(data)) {
        setOrders(data);
      } else {
        setOrders([]);
        console.error("Fetched orders are not an array:", data);
      }
    } catch (err) {
      console.error("Failed to fetch orders:", err);
      setOrders([]);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, newPassword }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setSuccess(data.msg);
        setError("");
      } else {
        setError(data.msg);
      }
    } catch (err) {
      setError("An error occurred while connecting to the server.");
    }
  };

  return (
    <Container className="mittkontocontainer">
      <h2 className="my-4">Mitt Konto</h2>
      <Card className="mb-4">
        <div className="mittkonto">
          <Card.Title>Ändra Lösenord</Card.Title>
          <Button onClick={() => setShowChangePassword(!showChangePassword)}>
            {showChangePassword ? "Avbryt" : "Ändra Lösenord"}
          </Button>
          {showChangePassword && (
            <Form onSubmit={handleChangePassword} className="mt-3">
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-post</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCurrentPassword">
                <Form.Label>Nuvarande Lösenord</Form.Label>
                <Form.Control
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formNewPassword">
                <Form.Label>Nytt Lösenord</Form.Label>
                <Form.Control
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Bekräfta Nytt Lösenord</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Spara Nytt Lösenord
              </Button>
            </Form>
          )}
        </div>
      </Card>
      <Card className="w-100">
        <div className="bestallningar">
          <Card.Title>Tidigare Beställningar</Card.Title>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Datum</th>
                <th>Totalt</th>
                <th>Status</th>
                <th>Produkt</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{new Date(order.date).toLocaleDateString()}</td>
                  <td>{order.total} SEK</td>
                  <td>{order.status}</td>
                  <td>
                    {order.cartItems.map((item) => (
                      <div key={item.id} className="d-flex align-items-center">
                        {item.name}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Container>
  );
}

export default MyAccount;
