import clientError from '../errorsHandler/error.controller.js';

const create = (data) => {
  const Model = data.Model;
  return async (req, res, next) => {
    if (!Model) {
      return next(clientError.messanger(400, `Bad request.`));
    }
    try {
      const instance = await Model.create({
        ...req.body
      });
      await instance.save();
      res.status(201).send(instance);
    } catch (error) {
      return next(clientError.messanger(400, error.message));
    }
  };
};

export default create;