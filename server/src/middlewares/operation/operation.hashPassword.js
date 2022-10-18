import tool from '../../tools/tool.hashPassword.js';

const hashPassword = async (req, res, next) => {
  const salt = tool.salting(process.env.SALT);
  const hashPassword = await tool.hashing(req.body.password, salt);
  req.body.password = hashPassword;
  next();
}

export default hashPassword;