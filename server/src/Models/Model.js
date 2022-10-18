import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
});

const Model = mongoose.model("Model", Schema);

export default Model;