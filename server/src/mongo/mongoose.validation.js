import clientError from "../errorsHandler/error.controller.js";

const mongooseValidationSchema = (data) => {
  const Model = data.Model;
  const credentails = data.keys

  return async (req, res, next) => {
    const instance = new Model(req.body);
    const error = instance.validateSync(credentails);
    if (error) {
      return next(clientError.messanger(400, error.message));
    }
    next();
  };
};

export default mongooseValidationSchema;