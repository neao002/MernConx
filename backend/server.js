const express = require("express");
const app = express();
const plantRouter = require("./routes/plant");
const plantUser = require("./routes/user");
const cors = require("cors");
require("dotenv").config();
// Mongodb connection using mongoose module
const connectDb = require("./config/db");
connectDb();
const PORT = process.env.PORT;
app.use(express.static(__dirname + "/public"));

app.use(cors());

app.use(express.json());

// routes as REST API for frontend
app.use("/plant", plantRouter);
app.post("/user/data", (req, res) => {
  // some data from frontend react UI
  console.log(req.body);
  // Save data to database
  // change or use data and send back message to fronend
  res.json({
    msg: "successfully received!",
    username: req.body.username,
    age: 32,
    country: "germany",
  });
});

app.use("/user", plantUser);

app.listen(PORT, () => {
  console.log("Backend is running on port" + PORT);
});
