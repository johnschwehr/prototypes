const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();

app.use(cors());

// Import routes
const ordersRoute = require("./routes/orders");
const uploadRoute = require("./routes/upload");

app.use("/orders", ordersRoute);
app.use("/upload", cors(), uploadRoute);

// DB connection
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("connected to DB!")
);

app.listen(3000);
