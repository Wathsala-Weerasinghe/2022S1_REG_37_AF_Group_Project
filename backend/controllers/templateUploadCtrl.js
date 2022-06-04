const asyncHandler = require("express-async-handler");
const Templates = require("../models/templateUploadModel");

//Add Template
const addTemplate = asyncHandler(async (req, res) => {
  const { tempName, document } = req.body;

  if (!tempName || !document) {
    res.status(400);
    throw new Error("Please Fill all the fields!");
  }

  const documentExists = await Templates.findOne({ tempName });

  if (documentExists) {
    res.status(400).json({ message: "Template Already Exists!" });
  }

  const template = await Templates.create({
    tempName,
    document,
  });

  if (template) {
    res.status(201).json({
      _id: template._id,
      tempName: template.tempName,
      document: template.document,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

//Get all templates
const getAllTemplates = asyncHandler(async (req, res) => {
  const template = await Templates.find();
  res.json(template);
});

//Fetch one template
const getTemplateById = asyncHandler(async (req, res) => {
  const template = await Templates.findById(req.params.id);

  if (template) {
    res.json(template);
  } else {
    res.status(404).json({ message: "Template not found" });
  }
});

//Delete a template
const deleteTemplate = asyncHandler(async (req, res) => {
  const template = await Templates.findByIdAndDelete(req.params.id);
  if (template) {
    res.json({ message: "Template Deleted Successfully" });
  } else {
    res.status(404).json({ message: "Template Not Found" });
  }
});

module.exports = {
  addTemplate,
  getAllTemplates,
  getTemplateById,
  deleteTemplate,
};
