const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");
const authenticateJWT = require("../middleware/authenticateJWT");

// Create a new order
router.post("/", async (req, res) => {
  try {
    const {
      cartItems,
      total,
      name,
      email,
      address,
      mobile,
      cardNumber,
      expDate,
      cvv,
    } = req.body;

    const newOrder = new Order({
      cartItems: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total,
      customer: { name, email, address, mobile },
      payment: { cardNumber, expDate, cvv },
      date: new Date(),
      status: "Under behandling",
    });

    await newOrder.save();
    res.status(201).json({ message: "Order submitted successfully." });
  } catch (error) {
    console.error("Error submitting order:", error);
    res.status(500).json({ message: "Failed to submit order.", error });
  }
});

// Fetch user's orders
router.get("/", authenticateJWT, async (req, res) => {
  try {
    console.log("User Email from JWT: ", req.user.userEmail);
    const orders = await Order.find({ "customer.email": req.user.userEmail });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
