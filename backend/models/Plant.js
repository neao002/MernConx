const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create a Schema
const plantSchema = new Schema({
  name: String,
  style: String,
  color: String,
  // added_by: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

// declare Schema as a model
const Plant = mongoose.model("Plant", plantSchema);
// export User Model
module.exports = Plant;
