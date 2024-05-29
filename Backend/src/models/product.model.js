const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name of the product"],
    }, // name: name of the product

    description: {
      type: String,
      required: [true, "Please enter the price of the product"],
    }, // description: description of the product

    category: {
      type: String,
      required: [true, "Please enter the price of the category"],
    }, // category: Herr, Dam, Unisex, Musk, Oud - define the category of the product
    
    notes: {
      type: String,
      required: false,
    }, // notes: notes define the scent of the product

    price: {
      type: Number,
      required: true,
      default: 0,
    }, // price: price of the product

    storage: {
      type: Number,
      required: true,
      default: 0,
    }, // storage: storage of the product

    image: {
      type: String,
      required: false,
    }, // image: image of the product
  },
  {
    timestamps: true,
  }
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
