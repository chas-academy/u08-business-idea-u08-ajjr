// const jwt = require("jsonwebtoken");
// const User = require("../models/user");

// const authenticateJWT = (req, res, next) => {
//   console.log(req.cookies);
//   const token = req.cookies.jwt_token;

//   if (!token) {
//     return res.status(401).json({ msg: "Ingen token, auktorisation nekad" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.user = decoded;

//     next();
//   } catch (err) {
//     res.status(401).json({ msg: "Token är inte giltig" });
//   }
// };

// module.exports = authenticateJWT;


const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  console.log("Cookies: ", req.cookies);
  const token = req.cookies.jwt_token || req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: "Ingen token, auktorisation nekad" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT: ", decoded);

    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token är inte giltig" });
  }
};

module.exports = authenticateJWT;
