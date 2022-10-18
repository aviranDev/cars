const sendToken = async (req, res, next) => {
  const token = req.validUser.generateAuthToken();
  res.status(200).send({ token });
};

export default sendToken;