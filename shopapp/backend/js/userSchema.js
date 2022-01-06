const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  whitePlayer: String,
  blackPlayer: String,
  moves: Array,
});

module.exports = mongoose.model("users", userSchema);
