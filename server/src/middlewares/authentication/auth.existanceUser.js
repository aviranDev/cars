import clientError from "../../errorsHandler/error.controller.js";

const existenceUser = (data) => {
  const Model = data.Model;
  return async (req, res, next) => {
    const isExist = await Model.findById(req.user._id);
    if (!isExist) {
      return next(clientError.messanger(403, `Model is not exist`))
    }
    next();
  }
};

export default existenceUser;