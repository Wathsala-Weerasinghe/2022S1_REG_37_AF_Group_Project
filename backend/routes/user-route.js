const router = require("express").Router();
const User = require("../models/User");
const { getHashPassword } = require("./hashservice");

const jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectID;
const JWT_SECRET_KEY = "movies2022";

//get all users
router.route("/").get((req, res) => {
  User.find()
    //.toArray()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Something wnet wrong!!", status: false });
    });
});

//get user by id
router.route("/:id").get((req, res) => {
  var query = { _id: ObjectId(req.params.id) };
  User.findOne(query)
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Something wnet wrong!!", status: false });
    });
});

//update user details
router.route("/update").put((req, res) => {
  var query = { _id: ObjectId(req.body.id) };
  var updatedValues = req.body;
  delete updatedValues.id;
  User.updateOne(query, { $set: updatedValues }, { upsert: true })
    .then((user) => {
      console.log(user);
      res.json({ message: "User is updated successfully!", status: true });
    })
    .catch((err) => {
      console.error(err);
      res.json({ message: "something went wrong!", status: false });
    });
});

//delete user details
router.route("/delete/:id").delete((req, res) => {
  var query = { _id: ObjectId(req.params.id) };
  var result = req.body;

  User.deleteOne(query, result)
    .then((user) => {
      console.log(user);
      if (user.deletedCount > 0) {
        res.json({
          message: "User is deleted successfully!",
          status: true,
        });
      } else {
        res.json({ message: "No item to delete!", status: true });
      }
    })
    .catch((err) => {
      console.error(err);
      res.json({ message: "something went wrong!", status: false });
    });
});


//user signup
router.route("/signup").post((req, res) => {
  var query = { username: req.body.username };

  User.findOne(query)
    .then((user) => {
      if (user == null) {
        req.body.password = getHashPassword(req.body.password);

        User.insertMany(req.body)
          .then((result) => {
            console.log(result);
            res.json({ message: "User created successfully!", status: true });
          })
          .catch((error) => {
            console.error(error);
            res.json({ message: "something went wrong!", status: false });
          });
      } else {
        console.log(user);
        res.json({ message: "user already exists!", status: false });
      }
    })
    .catch((err) => {
      console.error(err);
      res.json({ message: "something went wrong!", status: false });
    });
});

//user signin
router.route("/signin").post((req, res) => {
  User.findOne({ username: req.body.username })
    .then((result) => {
      if (result !== null) {
        if (result.password == getHashPassword(req.body.password)) {
          let jwtSecretKey = JWT_SECRET_KEY;
          let data = {
            time: Date(),
            userId: result._id,
            userRole: result.role,
          };

          const token = jwt.sign(data, jwtSecretKey);

          console.log(result);
          res.json({
            token: token,
            id: data.userId,
            role: data.userRole,
            status: true,
          });
          return;
        }
      } else {
        res.json({ message: "Invalid login information", status: false });
      }
    })
    .catch((error) => {
      console.error(error);
      res.json({ message: "something went wrong!", status: false });
    });
});

module.exports = router;
