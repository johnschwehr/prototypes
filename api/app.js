const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

// Import routes
const ordersRoute = require("./routes/orders");
const uploadRoute = require("./routes/upload");

app.use("/orders", ordersRoute);
app.use("/upload", uploadRoute);

// DB connection
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("connected to DB!")
);

app.listen(3000);
