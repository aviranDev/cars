import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const Schema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    minLength: 7,
    maxLength: 9,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
    minLength: [6, 'Too few eggs'],
    maxLength: 150,
  },
  admin: {
    type: Boolean,
    default: true,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now(),
  }
});

Schema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, admin: this.admin },
    process.env.PRIVET_KEY,
    { expiresIn: '2d' }
  );
};

const Admin = mongoose.model('Admin', Schema);

export default Admin;

