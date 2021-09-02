const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require('cors');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("We are on upload");
});

router.use("/upload", fileUpload());

// Upload Endpoint
router.post("/upload", cors(), (req, res) => {
  console.log("post /upload hit");

  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded." });
  }

  const file = req.files.file;

  console.log(__dirname);

  file.mv(`${__dirname}/../../temp/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

module.exports = router;