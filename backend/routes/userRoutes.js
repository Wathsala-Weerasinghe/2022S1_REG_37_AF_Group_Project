const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  updateUserDetails,
  deleteUser,
  getStudents,
} = require("../controllers/userCtrl");

router.route("/getAll").get(getAllUsers);

router.route("/getUserById/:id").get(getUserById);

router.route("/updateUserById/:id").patch(updateUserDetails);

router.route("/deleteUser/:id").delete(deleteUser);

router.route("/getStudentsList").get(getStudents);
