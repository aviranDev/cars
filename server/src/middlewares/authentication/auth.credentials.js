import clientError from "../../errorsHandler/error.controller.js";
import bcryptjs from 'bcryptjs';

const comparePasswords = (formPassword, userPassword) => {
  return bcryptjs.compareSync(formPassword, userPassword);
};

const authUserCredentails = (data) => {
  const Model = data.Model;
  let key = data.key;
  return async (req, res, next) => {
    const user = await Model.findOne({ [key]: req.body[key] });
    if (!user) {
      return next(clientError.messanger(401, 'invalid user credentails'))
    }

    const validPassword = comparePasswords(
      req.body.password.trim(),
      user.password
    );

    if (!validPassword) {
      return next(clientError.messanger(401, 'invalid user credentails'))
    }
    req.validUser = user;
    next();
  };
}

export default authUserCredentails;