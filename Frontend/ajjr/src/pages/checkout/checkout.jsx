import React, { useState } from "react";

function Checkout() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 1 },
    { id: 2, name: "Product 2", price: 20, quantity: 2 },
  ]);

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

  return (
    <div className="container">
      <h1>Din varukorg</h1>
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
      <div className="row">
        <div className="col-12">
          <h4>Total: {getTotalPrice()} kr</h4>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
