import clientError from "../../errorsHandler/error.controller.js";

const preventByBooleanKey = (data) => {
  const Collection = data.Model;
  const indexKey = data.key
  const errorMessage = data.message;
  const errorStatus = data.error;
  const isTrue = data.boolean;
  return async (req, res, next) => {
    let instance = await Collection.findOne({ [indexKey]: isTrue });
    if (instance) {
      next(clientError.messanger(errorStatus || 400, errorMessage || 'This operation is not allowed'))
    }
    next();
  };
};

export default preventByBooleanKey;