const router = require("express").Router();
const User = require("../models/User");

router.post("/create", (req, res) => {
  console.log(req.body);
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save((err, doc) => {
    res.json("user created");
  });
});

router.get("/create", (req, res) => {
  User.find((err, docs) => {
    res.json(docs);
  });
});

module.exports = router;
