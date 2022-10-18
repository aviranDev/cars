import clientError from '../errorsHandler/error.controller.js';

/**
 * Delete document by id
 * @param {*} data Model
 * @returns deleted document
 */
const documentbyId = (data) => {
  const Model = data.Model;
  return async (req, res, next) => {
    const intance = await Model.findByIdAndRemove(req.params.id);
    if (!intance) {
      return next(clientError.messanger(404, `${req.params.id} is not found`));
    }
    res.status(201).send(intance)
  };
};

/**
 * Delete document by payload
 * @param {*} data Model, key
 * @returns 
 */
const document = (data) => {
  const Model = data.Model;
  const key = data.key;
  return async (req, res, next) => {
    const payload = {
      [key]: req.params.id,
      user_id: req.user._id
    }
    const intance = await Model.findOneAndDelete(payload);
    if (!intance) {
      return next(clientError.messanger(404, `${req.params.id} is not found`));
    }
    res.status(201).send(intance)
  };
};

export default {
  documentbyId,
  document
};