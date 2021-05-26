const router = require("express").Router();
const Plant = require("../models/Plant");
const User = require("../models/User");

router.get("/add", (req, res) => {
  Plant.find((err, docs) => {
    res.json(docs);
  }).populate("added_by");
});

router.post("/add", (req, res) => {
  console.log(req.body, req.file);
  let userId = {};
  User.find((err, user) => {
    console.log(user[0], "herer");
    userId = user[0];

    console.log(userId, "hey");
    const newPlant = new Plant({
      name: req.body.name,
      style: req.body.style,
      color: req.body.color,
      added_by: userId.toString(),
    });
    newPlant.save((err, doc) => {
      res.json("A new Plant has been added!");
    });
  });
});

router.get("/delete/:id", (req, res) => {
  Plant.findByIdAndDelete(req.params.id, (err, doc) => {
    res.json("One plant data has been deleted!");
  });
});
module.exports = router;
