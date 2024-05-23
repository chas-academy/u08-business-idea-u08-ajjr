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

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    Image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
