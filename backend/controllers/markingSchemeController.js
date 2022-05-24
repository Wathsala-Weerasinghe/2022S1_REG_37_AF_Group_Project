const asyncHandler = require("express-async-handler");
const MarkingScheme = require("../models/markingSchemeModel");

//Insert Data
const addMarking = asyncHandler(async (req, res) => {
  const { researchTopic, type, marking } = req.body;

  const scheme = await MarkingScheme.create({
    researchTopic,
    type,
    marking,
  });

  if (scheme) {
    res.status(201).json({
      id: scheme._id,
      researchTopic: scheme.researchTopic,
      type: scheme.type,
      marking: scheme.marking,
    });
  } else {
    res.status(400).json({ message: "Schema Not Found!" });
  }
});

//Retrieve Data
const getAllSchemas = asyncHandler(async (req, res) => {
  const schemas = await MarkingScheme.find();
  res.json(schemas);
});

//Retrieve One using ID
const getSchemaById = asyncHandler(async (req, res) => {
  const schemas = await MarkingScheme.findById(req.params.id);

  if (schemas) {
    res.json(schemas);
  } else {
    res.status(404).json({ message: "Marking Schema Not Found" });
  }
});

//Update
const updateSchemas = asyncHandler(async (req, res) => {
  const schemas = await MarkingScheme.findById(req.params.id);

  if (schemas) {
    schemas.researchTopic = req.body.researchTopic || schemas.researchTopic;
    schemas.type = req.body.type || schemas.type;
    schemas.marking = req.body.marking || schemas.marking;

    const updateSchemas = await schemas.save();

    res.status(201).json({
      id: updateSchemas._id,
      researchTopic: updateSchemas.researchTopic,
      type: updateSchemas.type,
      marking: updateSchemas.marking,
    });
  } else {
    res.status(404).json({ message: "Marking Schema Not Found" });
  }
});

//Delete
const deleteSchema = asyncHandler(async (req, res) => {
  const schemas = await MarkingScheme.findByIdAndDelete(req.params.id);
  if (schemas) {
    res.json({ message: "Marking Schema Deleted Successfully" });
  } else {
    res.status(404).json({ message: "Marking Schema Not Found" });
  }
});

module.exports = {
  addMarking,
  getAllSchemas,
  getSchemaById,
  updateSchemas,
  deleteSchema,
};
