import clientError from "../../errorsHandler/error.controller.js";

const preventByUniqueKey = (data) => {
  const Collection = data.Model;
  const indexKey = data.key
  const errorMessage = data.message;
  const errorStatus = data.error;
  return async (req, res, next) => {
    let instance = await Collection.findOne({ [indexKey]: req.body[indexKey] });
    if (instance) {
      return next(clientError.messanger(errorStatus || 400, errorMessage || 'This operation is not allowed'))
    }
    next();
  };
};

export default preventByUniqueKey;