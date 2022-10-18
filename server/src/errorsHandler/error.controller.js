const messanger = (status, message) => {
  const obj = {
    status: status,
    errorMessage: message,
  };
  return obj;
};

const errorResponse = (err, req, res, next) => {
  const error = new Error(err.errorMessage);
  error.status = err.status;
  next(error);
};

const clientError = {
  errorResponse,
  messanger,
};
export default clientError;

