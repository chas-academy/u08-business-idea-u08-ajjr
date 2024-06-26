const Product = require("../models/product.model");

// this is a controller file that contains functions that are
// used to control the data flow of the product model.

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single product    
const getProduct = async (req, res) => {
  try {
    const productId = req.product._id;
    const products = await Product.find({ productId }).populate('items.productId');
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a product    
const createProduct = async (req, res) => {
  try {
    /* const product = await Product.create(req.body);
    res.status(200).json(product); */
    console.log(req.body);
    console.log(req.file);
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      topNotes: req.body.topnNotes,
      middleNotes: req.body.middleNotes,
      baseNotes: req.body.baseNotes,
      quantity: req.body.quantity,
      image: req.file.filename,
    });
    const savedProduct = await newProduct.save();
    /* console.log(newProduct); */
    res.status(201).json(savedProduct);
    /* res.status(200).send("data came in to the backend"); */
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product  
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export the functions to the routes/product.route.js    
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};