import erita from "erita";


const brandSchema = erita.schema(
  { key: 'brand', optional: { type: 'string', required: true } },
  { key: 'img', optional: { type: 'string' } },
  { key: 'path', optional: { type: 'string', required: true } },
);

export default brandSchema