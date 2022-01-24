const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productID: String,
  title: String,
  type: String,
  description: String,
  price: Number,
  rating: Number,
});

module.exports = mongoose.model("products", productSchema);
