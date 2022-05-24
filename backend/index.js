const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// Connect to mongodb
const URI = process.env.MONGODBURL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Database Connection Successfull!");
  }
);

// Router
// app.use("/user", require("./routes/userRoute"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on PORT :", PORT);
});