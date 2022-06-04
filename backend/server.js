require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

const app = express();

const TOKEN_HEADER_KEY = "Authorization";
const JWT_SECRET_KEY = "movies2022";

let requestUserId = null;
let requestUserRole = null;

function isAuthorized(req, res, next) {
  if (
    req.url === "/user/signup" ||
    req.url === "/user/signin" ||
    req.url === "/version" ||
    req.url === "/test"
  ) {
    next();
    return;
  }

  try {
    const token = req.header(TOKEN_HEADER_KEY);
    const verified = jwt.verify(token, JWT_SECRET_KEY);
    if (verified) {
      var payLoad = jwt_decode(token, { payload: true });
      console.log(payLoad);

      requestUserId = payLoad.userId;
      requestUserRole = payLoad.userRole;

      next();
      return;
    }

    // Access Denied
    res.status(401).send("Not permitted");
  } catch (error) {
    // Access Denied
    res.status(401).send(error);
  }
}

//app middleware
app.use(bodyParser.json());
app.use(cors());
//app.use(isAuthorized);

//create connection to mongodb
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Successfully connected to MongoDB");
});

//import routes
const userRouter = require("./routes/user-route");
const topicRouter = require("./routes/topic-route");
const markingRouter = require("./routes/marking-route");

app.use("/users", userRouter);
app.use("/topics", topicRouter);
app.use("/marking", markingRouter);

app.get("/", (req, res) => res.send("Service is up and running.."));
app.get("/version", (req, res) => res.send("1.0.0"));
app.get("/test", (req, res) => {
  res.json(req.url);
});

const port = 8070;
app.listen(port, () => {
  console.log("Server is running on port : ", port);
});
