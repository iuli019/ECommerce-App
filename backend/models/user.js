const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  isAdmin: { type: Boolean, required: true, default: false },
  registerDate: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
