const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    cartItems: [
      {
        id: Number,
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    total: Number,
    customer: {
      name: String,
      email: String,
      address: String,
      mobile: String,
    },
    payment: {
      cardNumber: String,
      expDate: String,
      cvv: String,
    },
    date: { type: Date, default: Date.now },
    status: { type: String, default: "Under behandling" },
  });
  
  const Order = mongoose.model("Order", orderSchema);
  
  module.exports = Order;
