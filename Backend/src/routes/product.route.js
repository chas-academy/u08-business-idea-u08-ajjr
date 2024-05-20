const express = require("express");
const Product = require("./models/product.model.js");
const router = express.Router();

// get all products
router.get('/');

// get one product by id
router.get("/:id");

// create a new product
router.post("/");

// update a product
router.put("/:id");

// delete a product
router.delete("/:id");

module.exports = router;

