const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userID: String,
  purchased: { type: Date, default: Date.now },
  items: Array,
});

module.exports = mongoose.model("orders", userSchema);
