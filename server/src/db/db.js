import mongoose from 'mongoose';
import config from '../config/config.js';
import info from './information.js';

const mongoDB = async () => {
  try {
    await mongoose.connect(config.mongo.url);
    return info.fulFill();
  } catch (err) {
    return info.reject(err);
  }
};

export default mongoDB;