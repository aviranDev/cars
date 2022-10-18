import clientError from "../../errorsHandler/error.controller.js";
import mongoose from 'mongoose';

const validateIdParams = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(clientError.messanger(401, `Item with id: ${req.params.id} doesn't exist`));
  }
  next();
};


export default validateIdParams;