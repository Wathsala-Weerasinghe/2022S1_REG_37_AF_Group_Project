const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    GroupName: {
      type: String,
      required: true,
    },
    GroupId: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    TopicCategory: {
      type: String,
      required: true,
    },
    TopicName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("acceptedtopic", groupSchema);
