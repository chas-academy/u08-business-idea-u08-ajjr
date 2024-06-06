
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
    res.status(500).json({ message: "Failed to submit order.", error });
  }
});

// Fetch user's orders
router.get("/", async (req, res) => { //authenticateJWT
  try {
    const orders = await Order.find({ "customer.email": req.user.userEmail }); // this was the problem req.user.userEmailAnvänd userEmail från JWT
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
