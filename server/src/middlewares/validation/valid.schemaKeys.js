const getSchemaKeys = (schema) => {
  const arrayOfKeys = Array.from(schema.keys());
  return arrayOfKeys
};

export default getSchemaKeys