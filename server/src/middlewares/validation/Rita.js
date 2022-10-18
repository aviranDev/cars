import handler from './vaild.handler.js';
import idParams from './valid.idParams.js';
import getSchemaKeys from './valid.schemaKeys.js';
import optionalKeys from './valid.optionalKeys.js';

const buildMap = (schema) => {
  const newSchema = new Map(schema)
  return newSchema;
}

export const Rita = Object.create({

  schema: function (...asd) {
    let newSchema = [...asd];
    return newSchema;
  },

  validate: function (newSchema) {
    const map = buildMap(
      newSchema.map(object => {
        const options = ['key', 'optional'];
        const keys = Object.keys(object);
        const error = optionalKeys(keys, options);
        return error ? [object.key = 'Incorrect keyword: (key/optional).'] : [object.key, object.optional || {}];
      }),
    );
    const keys = getSchemaKeys(map);
    return handler(keys, map);
  },
});

export const validateId = () => {
  return idParams;
};

export default Rita;