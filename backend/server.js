require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//app middleware
app.use(bodyParser.json());
app.use(cors());

//create connection to mongodb
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Successfully connected to MongoDB");
});

//import routes
const userRouter = require("./routes/UserRoute");

app.use("/user", userRouter);

const port = 8070;
app.listen(port, () => {
  console.log("Server is running on port : ", port);
});
