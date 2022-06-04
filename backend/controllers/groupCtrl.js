const asyncHandler = require("express-async-handler");
const Group = require("../models/groupModel");

//Get all panels
const getAllGroups = asyncHandler(async (req, res) => {
  const group = await Group.find();
  res.json(group);
});

//Fetch one group
const getGroupById = asyncHandler(async (req, res) => {
  const group = await Group.findById(req.params.id);

  if (group) {
    res.json(group);
  } else {
    res.status(404).json({ message: "Group not found" });
  }
});

//Update Panel Details
const updateGroupDetails = asyncHandler(async (req, res) => {
  const group = await Group.findById(req.params.id);

  if (group) {
    group.GroupName = req.body.GroupName || group.GroupName;
    group.GroupId = req.body.GroupId || group.GroupId;
    group.tel = req.body.tel || group.tel;
    group.TopicCategory = req.body.TopicCategory || group.TopicCategory;
    group.TopicName = req.body.TopicName || group.TopicName;

    const updatedGroup = await group.save();

    res.json({
      _id: updatedGroup._id,
      GroupName: updatedGroup.GroupName,
      GroupId: updatedGroup.GroupId,
      tel: updatedGroup.tel,
      TopicCategory: updatedGroup.TopicCategory,
      TopicName: updatedGroup.TopicName,
    });
  } else {
    res.status(404);
    throw new Error("Group Not Found");
  }
});

module.exports = {
  getAllGroups,
  getGroupById,
  updateGroupDetails,
};
