const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name of the product"],
    },

    description: {
      type: String,
      required: [true, "Please enter the price of the product"],
    },
    
    notes: {
      type: String,
      required: false,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
