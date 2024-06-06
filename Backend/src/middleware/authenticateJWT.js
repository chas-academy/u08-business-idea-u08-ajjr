// const jwt = require("jsonwebtoken");
// const User = require("../models/user");

// const authenticateJWT = (req, res, next) => {
//   console.log("this is the cookies", req.cookies);
//   const token = req.cookies.token;

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
const User = require("../models/user");

function authenticateJWT(req, res, next) {
  const token = req.header("Authorization")?.split(' ')[1]; // Bättre hantering av token
  if (!token) {
    return res.status(401).json({ msg: "Ingen token, auktorisation nekad" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("User decoded from token:", req.user); // Logga användarinformation
    next();
  } catch (err) {
    console.error("JWT-verifieringsfel:", err);
    res.status(401).json({ msg: "Token är inte giltig" });
  }
}

module.exports = authenticateJWT;