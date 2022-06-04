const {
  getAllGroups,
  getGroupById,
  updateGroupDetails,
} = require("../controllers/groupCtrl");

const router = require("express").Router();

router.patch("/updateGroupDetails/:id", updateGroupDetails);

router.get("/getAllGroups", getAllGroups);

router.get("/getGroupById/:id", getGroupById);

module.exports = router;
