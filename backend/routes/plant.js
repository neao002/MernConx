const router = require("express").Router();
const { populate } = require("../models/Plant");
const Plant = require("../models/Plant");
const User = require("../models/User");

router.get("/add", (req, res) => {
  const name = req.params;
  Plant.find((err, docs) => {
    res.json(docs);
  }).populate("added_by");
  // .populate("added_by")

  // // reverse and limit
  // // .sort({ _id: -1 })
  // // .limit(2);
  // // search engine
  // .where("name")
  // .equals("tomaes");
});

// router.get("/search", (req, res) => {
//   Plant.find((err, plants) => {
//     res.json(plants);
//   }).populate("added_by");
// });

router.get("/add/:name", (req, res) => {
  Plant.find((err, plants) => {
    res.json(plants);
  })
    .where("name")
    .equals(req.params.name);
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
      // added_by: userId.toString(),
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

//updating

router.post("/update", (req, res) => {
  console.log(req.body);
  Plant.findByIdAndUpdate(req.body.id, req.body, (err, doc) => {
    res.json("Plant Data just updated!");
    console.log(req.body.id);
  });
});

router.get("/update/:id", (req, res) => {
  Plant.findById(req.params.id, (err, plant) => {
    res.json(plant);
  });
});

module.exports = router;
