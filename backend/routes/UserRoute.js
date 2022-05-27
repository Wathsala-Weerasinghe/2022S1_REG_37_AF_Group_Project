const router = require("express").Router();
const User = require("../models/User");
const ObjectId = require("mongodb").ObjectID;
var crypto = require("crypto");
const salt = "59509e61e54a2c849d1f46186899f674"; //crypto.randomBytes(16).toString('hex');

getHashPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return hash;
};

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

//user signup
router.route("/signup").post((req, res) => {
  req.body.password = getHashPassword(req.body.password);

  User.insertMany(req.body)
    .then((result) => {
      console.log(result);
      res.json({ message: "User created successfully!", status: true });
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
      if (result.password == getHashPassword(req.body.password)) {
        console.log(result);
        res.json({
          id: data.userId,
          role: data.userRole,
          status: true,
        });
        return;
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
