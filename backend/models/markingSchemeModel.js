const mongoose = require("mongoose");

const markingSchema = new mongoose.Schema(
  {
    researchTopic: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    marking: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Marking_Scheme", markingSchema);