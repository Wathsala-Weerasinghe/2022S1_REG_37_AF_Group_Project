const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  updateUserDetails,
  deleteUser,
  getStudents,
  getStaff,
  getAdmins,
} = require("../controllers/userCtrl");

router.get("/getAll", getAllUsers);

router.get("/getUserById/:id", getUserById);

router.patch("/updateUserById/:id", updateUserDetails);

router.delete("/deleteUser/:id", deleteUser);

router.get("/getStudentsList", getStudents);

router.get("/getAdminsList", getAdmins);

router.get("/getStaffList", getStaff);

module.exports = router;
