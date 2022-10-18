import validateKeys from './valid.validateKeys.js';
import validateValues from './valid.validateValues.js';
import validateSchema from './valid.schema.js';

const validateHandler = (keys, schema) => {
  return async (req, res, next) => {
    /* validate Keys */
    const errorKeys = validateKeys(req.body, keys);
    if (errorKeys) {
      return res.status(404).send(errorKeys)
    }

    /* validate Values */
    const errorValues = validateValues(req.body, schema);
    if (errorValues) {
      return res.status(403).send(errorValues)
    }

    //Validate Schema
    const errorSchema = validateSchema(req.body, schema)
    if (errorSchema) {
      return res.status(400).send(errorSchema)
    }
    next();
  };
}

export default validateHandler;