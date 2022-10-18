import differentKeys from './valid.diffrenetKeys.js';
import preventAddinital from './valid.preventAddinital.js';

/**
 * Validate keys of request body input client form.
 * The validation is Considered by the schema keys values structure. 
 * @param {*} input 
 * @param {*} schemaKeys 
 * @returns errors: differentKeys/preventAddinital or null
 */
const validateKeys = (input, schemaKeys) => {
  const inputKeys = Object.keys(input);

  const diffrenetError = differentKeys(inputKeys, schemaKeys);
  if (diffrenetError) return diffrenetError;

  const addedKeysError = preventAddinital(inputKeys, schemaKeys);
  if (addedKeysError) {
    return addedKeysError;
  }

  return null;
};

export default validateKeys;