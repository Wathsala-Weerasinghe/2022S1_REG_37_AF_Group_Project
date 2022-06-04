const {
  addTemplate,
  getAllTemplates,
  getTemplateById,
  deleteTemplate,
} = require("../controllers/templateUploadCtrl");

const router = require("express").Router();

router.post("/addTemplate", addTemplate);

router.get("/getAllTemplates", getAllTemplates);

router.get("/getTemplateById/:id", getTemplateById);

router.delete("/deleteTemplate/:id", deleteTemplate);

module.exports = router;
