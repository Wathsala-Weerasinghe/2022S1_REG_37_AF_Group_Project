const {
  addMarking,
  getAllSchemas,
  getSchemaById,
  updateSchemas,
  deleteSchema,
} = require("../controllers/markingSchemeController");

const router = require("express").Router();

router.post("/add", addMarking);

router.get("/retrieveAll", getAllSchemas);

router.get("/getOne/:id", getSchemaById);

router.patch("/updateMarking/:id", updateSchemas);

router.delete("/deleteMarking/:id", deleteSchema);

module.exports = router;
