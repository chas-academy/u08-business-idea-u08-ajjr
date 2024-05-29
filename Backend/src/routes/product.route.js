const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

//get all products
router.get('/', getProducts);

// get a single product
router.get("/:id", getProduct);

// create a product
router.post("/", upload.single('image'), createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);

// export the router    
module.exports = router;