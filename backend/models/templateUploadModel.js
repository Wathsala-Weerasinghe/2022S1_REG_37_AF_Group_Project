const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  tempName: {
    type: String,
    required: true,
  },

  document: {
    type: String,
    required: true,
  },
});

const Templates = mongoose.model("template", templateSchema);
module.exports = Templates;
