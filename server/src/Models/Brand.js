import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  brand: {
    type: String,
    minLength: 2,
    maxLength: 20,
    required: true,
  },
  img: {
    type: String,
    minLength: 2,
    maxLength: 150,
    required: true,
  },
  path: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  }
});

const Brand = mongoose.model("Brand", Schema);

export default Brand;