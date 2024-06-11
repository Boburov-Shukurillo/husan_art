const { Schema, model } = require("mongoose");

const travelModel = new Schema({
  title: {
    type: String,
    required: true,
    minilength: 3,
  },
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    minilength: 1,
  },
  creted_data: {
    type: String,
    required: true,
  },
});

module.exports = model("Travel", travelModel);
