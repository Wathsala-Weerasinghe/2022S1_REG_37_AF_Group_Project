const router = require("express").Router();
const User = require("../models/User");
const ObjectId = require("mongodb").ObjectID;

//insert new user
router.route("/insert").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role;

  const newUser = new User({
    name,
    email,
    phone,
    username,
    password,
    role,
  });

  newUser
    .save()
    .then(() => res.json("User is successfully added!!"))
    .catch((err) => {
      console.log(err);
      res.json({ message: "Something wnet wrong!!", status: false });
    });
});

//get all users
router.route("/").get((req, res) => {
  User.find()
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
  const user = User.findOne(query)
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
router.route("/update/:id").put((req, res) => {
  var query = { _id: ObjectId(req.params.id) };
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

router.route("/delete/:id").delete((req, res) => {
  var query = { _id: ObjectId(req.params.id) };
  var result = req.body;

  User.deleteOne(query, result)
    .then((user) => {
      console.log(user);
      res.json({
        message: "User is deleted successfully!",
        status: true,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({ message: "something went wrong!", status: false });
    });
});

module.exports = router;
