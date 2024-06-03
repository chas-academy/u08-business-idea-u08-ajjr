// import React, { useState } from "react";
// import "./checkout.css";
// import { Container } from "react-bootstrap";
// import { Row, Col, Form, Button } from "react-bootstrap";

// function Checkout() {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "Product 1", price: 10, quantity: 1 },
//     { id: 2, name: "Product 2", price: 20, quantity: 2 },
//   ]);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     cardNumber: "",
//     expDate: "",
//     cvv: "",
//   });

//   const handleQuantityChange = (id, delta) => {
//     const updatedItems = cartItems.map((item) => {
//       if (item.id === id) {
//         const updatedQuantity = item.quantity + delta;
//         return { ...item, quantity: updatedQuantity > 0 ? updatedQuantity : 0 };
//       }
//       return item;
//     });
//     setCartItems(updatedItems);
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.quantity * item.price,
//       0
//     );
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Information submitted. Check console for data.");
//   };

//   const isEmptyCart =
//     cartItems.length === 0 || cartItems.every((item) => item.quantity === 0);

//   return (
//     <Container className="checkout">
//       <div className="checkoutrow">
//         {isEmptyCart ? (
//           <div className="col-12">
//             <h1>Din varukorg</h1>
//             <p>Det finns inget i varukorgen.</p>
//           </div>
//         ) : (
//           <>
//             <div className="step-1">
//               <h1 className="step-1-header">1. Din varukorg</h1>
//               <div className="row">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="col-12 mb-3">
//                     <div className="card">
//                       <div className="card-body">
//                         <div className="d-flex justify-content-between align-items-center">
//                           <div>
//                             <span>{item.name}</span>
//                             <button
//                               className="btn btn-link text-decoration-none"
//                               onClick={() => handleQuantityChange(item.id, -1)}
//                             >
//                               -
//                             </button>
//                             <span>{item.quantity}</span>
//                             <button
//                               className="btn btn-link text-decoration-none"
//                               onClick={() => handleQuantityChange(item.id, 1)}
//                             >
//                               +
//                             </button>
//                           </div>
//                           <div>
//                             <span>{item.price * item.quantity} kr</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
            
//                 <div className="free-delivery">
//                   <h4>Fri frakt</h4>
//                   <h4>Postnord</h4>
//                 </div>
       

//               <div className="row">
//                 <div className="col-12">
//                   <h4>Total: {getTotalPrice()} kr</h4>
//                 </div>
//               </div>
//             </div>
//             <div className="step-1">
//               <h1 className="step-1-header">2. Dina uppgifter</h1>
//               <Form onSubmit={handleSubmit} className="testi">
//                 <Form onSubmit={handleSubmit}>
//                   <Row className="mb-3 step-2-form">
//                     <Form.Group as={Col} md="4">
//                       <Form.Label>Namn</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </Form.Group>

//                     <Form.Group as={Col} md="4">
//                       <Form.Label>Email</Form.Label>
//                       <Form.Control
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </Form.Group>
//                   </Row>
//                 </Form>

//                 <Row className="mb-3 step-2-form">
//                   <Form.Group as={Col} md="4">
//                     <Form.Label>Leveransadress</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </Form.Group>

//                   <Form.Group as={Col} md="4">
//                     <Form.Label>Mobil</Form.Label>
//                     <Form.Control
//                       type="tel"
//                       name="mobile"
//                       value={formData.mobile}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </Form.Group>
//                 </Row>

//                 <Form.Group as={Row} className="mb-3 step-2-form">
//                   <Form.Label>Card Number</Form.Label>
//                   <Col sm="8">
//                     <Form.Control
//                       type="text"
//                       name="cardNumber"
//                       value={formData.cardNumber}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </Col>
//                 </Form.Group>

//                 <Row className="mb-3 step-2-form">
//                   <Form.Group as={Col} md="4">
//                     <Form.Label>Expiration Date</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="expDate"
//                       placeholder="MM/YY"
//                       value={formData.expDate}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </Form.Group>

//                   <Form.Group as={Col} md="4">
//                     {" "}
//                     <Form.Label>CVV</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="cvv"
//                       value={formData.cvv}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </Form.Group>
//                 </Row>
//                 <div className="submit-button">
//                   <Button type="submit" className="btn btn-success step-2-form">
//                     Beställ
//                   </Button>
//                 </div>
//               </Form>
//             </div>
//           </>
//         )}
//       </div>
//     </Container>
//   );
// }

// export default Checkout;

import React from "react";
import "./checkout.css";
import { Container } from "react-bootstrap";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

const Checkout = () => {
  const { cartItems = [], setCartItems } = useOutletContext(); // Default to empty array if undefined

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    address: "",
    mobile: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const handleQuantityChange = (id, delta) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const updatedQuantity = item.quantity + delta;
        return { ...item, quantity: updatedQuantity > 0 ? updatedQuantity : 0 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Om du använder JWT
          credentials: "include",
          mode: "cors",
        },
        body: JSON.stringify({ 
          ...formData, 
          cartItems,
          total: getTotalPrice()
        }),
      });
      if (response.ok) {
        alert("Order submitted successfully.");
        setCartItems([]); // Clear the cart
      } else {
        alert("Failed to submit order.");
      }
    } catch (err) {
      console.error("Failed to submit order:", err);
    }
  };

  const isEmptyCart =
    cartItems.length === 0 || cartItems.every((item) => item.quantity === 0);

  return (
    <Container className="checkout">
      <div className="checkoutrow">
        {isEmptyCart ? (
          <div className="col-12">
            <h1>Din varukorg</h1>
            <p>Det finns inget i varukorgen.</p>
          </div>
        ) : (
          <>
            <div className="step-1">
              <h1 className="step-1-header">1. Din varukorg</h1>
              <div className="row">
                {cartItems.map((item) => (
                  <div key={item.id} className="col-12 mb-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span>{item.name}</span>
                            <button
                              className="btn btn-link text-decoration-none"
                              onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="btn btn-link text-decoration-none"
                              onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              +
                            </button>
                          </div>
                          <div>
                            <span>{item.price * item.quantity} kr</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            
                <div className="free-delivery">
                  <h4>Fri frakt</h4>
                  <h4>Postnord</h4>
                </div>
       

              <div className="row">
                <div className="col-12">
                  <h4>Total: {getTotalPrice()} kr</h4>
                </div>
              </div>
            </div>
            <div className="step-1">
              <h1 className="step-1-header">2. Dina uppgifter</h1>
              <Form onSubmit={handleSubmit} className="testi">
                <Row className="mb-3 step-2-form">
                  <Form.Group as={Col} md="4">
                    <Form.Label>Namn</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3 step-2-form">
                  <Form.Group as={Col} md="4">
                    <Form.Label>Leveransadress</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="4">
                    <Form.Label>Mobil</Form.Label>
                    <Form.Control
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Row>

                <Form.Group as={Row} className="mb-3 step-2-form">
                  <Form.Label>Card Number</Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </Col>
                </Form.Group>

                <Row className="mb-3 step-2-form">
                  <Form.Group as={Col} md="4">
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control
                      type="text"
                      name="expDate"
                      placeholder="MM/YY"
                      value={formData.expDate}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="4">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Row>
                <div className="submit-button">
                  <Button type="submit" className="btn btn-success step-2-form">
                    Beställ
                  </Button>
                </div>
              </Form>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Checkout;