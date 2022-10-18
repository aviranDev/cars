import clientError from '../errorsHandler/error.controller.js';

const update = (data) => {
  const Model = data.Model;
  return async (req, res, next) => {
    const payload = {
      _id: req.params.id,
      user_id: req.user._id
    };
    const intance = await Model.findOneAndUpdate(payload, req.body, { new: true });
    if (!intance) {
      return next(clientError.messanger(404, `${req.params.id} is not found`));
    }
    res.status(201).send(intance)
  };
};

export default update;