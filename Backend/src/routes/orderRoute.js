
const express = require("express");
const router = express.Router();
const Order = require("../models/order.model"); 
const authenticateJWT = require("../middleware/authenticateJWT");

// Create a new order
router.post("/", async (req, res) => {
    try {
        const { cartItems, total, name, email, address, mobile, cardNumber, expDate, cvv } = req.body;

        const newOrder = new Order({
            cartItems,
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
router.get("/", authenticateJWT, async (req, res) => {
    try {
        const orders = await Order.find({ "customer.email": req.user.email }); // Use user.email from JWT
        res.json(orders);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;
