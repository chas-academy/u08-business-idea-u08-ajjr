# U08 - Webshop Ajjr Official

### Project description
This project is the result of a school group assignment where we had the opportunity to work on a real case. One of our group members runs a hobby business selling perfumes, which we saw as an excellent opportunity to have a concrete goal for our work.

The purpose of the project was to create a digital platform to support the online sales of perfumes. We aimed to offer a user-friendly and aesthetically pleasing website that could handle product presentation, customer orders, and (payments).

### Technologies and tools 

- **Frontend:** HTML, CSS/Bootstrap, JavaScript, React
- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Version Control:** Git and GitHub 

### Installation instructions

1. Clone this repository to your local machine (computer).
2. Open a terminal and navigate to the directory where you have cloned the project (cd ....).
3. Install all dependencies by running the command: npm install or yarn install.
4. Start the application by running the command: npm start or yarn start.
5. Open your web browser and go to http://localhost: **** to see the application in action.

### What problem does this codebase solve?

This codebase below provides a middleware function for authenticating JSON Web Tokens (JWT) in a Node.js application.

 - Retrieves JWT token from request cookies.
 - Verifies the token using a secret key.
 - Attaches decoded user information to the request object.
 - Responds with a 401 status if token is missing or invalid.

```js
 const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticateJWT = (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.jwt_token;

  if (!token) {
    return res.status(401).json({ msg: "Ingen token, auktorisation nekad" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token är inte giltig" });
  }
};

module.exports = authenticateJWT;
```

This codebase below solves the problem of fetching orders for a logged-in user in a Node.js application using Express.js.

 - It defines a route handler that requires authentication using JWT.
 - Retrieves the user's email from the decoded JWT payload.
 - Uses the email to query orders associated with the user.
 - Responds with the fetched orders or an error message if encountered.

```js
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

```

### Small example for usage

A website that allows you to be inspired and to shop perfumes filtrered by gender and ingrendients. 


### Links to any additional documentation/reference material and prototype

- **Google drive:** Link will be sent separately to the examinator. 

### Future Development

We plan to continue developing and improving the platform by:

* APIs

* Ability to save in the shopping cart

* Expand with more products

* User account with more features

* Add payment methods

* Build a customer base

### Contributors to the project

* Shaker Nasser
* Arian Fekri
* Heval Demirel 
* Mikael Kajje 
* Brian Osumba 
* Denjin Muratagic
* Ahmed Almasri 

### License

All right reserved to group 8 - Ajjr Chas Academy 2024 - FWD23