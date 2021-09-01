const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

app.use("/upload", fileUpload());

// Upload Endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded." });
  }

  const file = req.files.file;

  console.log(__dirname);

  file.mv(`${__dirname}/upload/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

// Store Order Endpoint
//app.post("/store_order", (req, res) => {});

app.listen(5000, () => console.log("Server started."));
