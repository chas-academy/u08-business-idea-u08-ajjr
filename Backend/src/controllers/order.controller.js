
const Order = require('../models/order.model');
const User = require('../models/user');

// Get all orders for the logged-in user
const getOrders = async (req, res) => {
  try {
    const userId = req.user._id;
    const orders = await Order.find({ userId }).populate('items.productId');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { cartItems, total } = req.body;
    const userId = req.user._id;
    const newOrder = new Order({
      userId,
      items: cartItems.map(item => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      total,
      status: 'Pending',
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

module.exports = {
  getOrders,
  createOrder
};
