const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Ingen token, auktorisation nekad" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token är inte giltig" });
  }
};

module.exports = authenticateJWT;
