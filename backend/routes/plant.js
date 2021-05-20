const router = require("express").Router();
const Plant = require("../models/Plant");

const multer = require("multer");
// settings for multer
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "public/images");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/add", upload.single("photoPicSelect"), (req, res) => {
  // data from frontend UI
  console.log(req.body, req.file);
  const newPlant = new Plant({
    name: req.body.name,
    style: req.body.style,
    color: req.body.color,
    photoPicSelect: "/images/" + req.file.filename,
  });
  newPlant.save((err, doc) => {
    res.json("A new Plant has been added!");
  });
});
router.get("/add", (req, res) => {
  Plant.find((err, docs) => {
    res.json(docs);
  });
});
router.get("/delete/:id", (req, res) => {
  Plant.findByIdAndDelete(req.params.id, (err, doc) => {
    res.json("One plant data has been deleted!");
  });
});
module.exports = router;
