const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create a Schema
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

// declare Schema as a model
const User = mongoose.model("User", userSchema);
// export User Model
module.exports = User;
