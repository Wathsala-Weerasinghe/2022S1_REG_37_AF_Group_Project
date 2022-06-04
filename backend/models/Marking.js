const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MarkingSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    marking: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("marking_schemes", MarkingSchema);

module.exports = user;
