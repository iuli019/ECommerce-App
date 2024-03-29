const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  numberInStock: { type: Number },
  imageUrl: { type: String },
  inCart: { type: Boolean, default: false },
  numberForCart: { type: Number },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
