const internalError = (req, res, next) => {
  const error = new Error('Not Found');
  error.status = 500;
  next(error);
};

export default internalError
