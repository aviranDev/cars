

const errors = (error) => {
  return async (req, res, next) => {
    if (error) {
      return res.status(400).send(error)
    }
    next();

  };
}

export default errors;