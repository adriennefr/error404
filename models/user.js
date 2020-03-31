const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  password: String,
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User

