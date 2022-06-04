const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//Get all user details
const getAllUsers = asyncHandler(async (req, res) => {
  const user = await User.find();
  res.json(user);
});

//Fetch one user
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

//Update Student Details
const updateUserDetails = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.role = req.body.role || user.role;
    user.username = req.body.username || user.username;

    const updatedUser = await User.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      role: updatedUser.role,
      username: updatedUser.username,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

//Delete a schedule
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User Not Found" });
  }
});

//Get all students
const getStudents = asyncHandler(async (req, res) => {
  const role = "student";
  const user = await User.find({ role });

  if (user) {
    res.json(user);
  }
});

//Get all staff
const getStaff = asyncHandler(async (req, res) => {
  const role = "staff";
  const user = await User.find({ role });

  if (user) {
    res.json(user);
  }
});
//Get all admins
const getAdmins = asyncHandler(async (req, res) => {
  const role = "admin";
  const user = await User.find({ role });

  if (user) {
    res.json(user);
  }
});
module.exports = {
  getAllUsers,
  getUserById,
  updateUserDetails,
  deleteUser,
  getStudents,
  getStaff,
  getAdmins,
};
