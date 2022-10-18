import { Rita } from '../../middlewares/validation/Rita.js';

export const modelSchema = Rita.schema(
  { key: 'brand', optional: { type: 'string', min: 2, max: 20, required: true } },
  { key: 'model', optional: { type: 'string', min: 2, max: 20, required: true } },
  { key: 'info', optional: { type: 'string', min: 6, max: 150, required: true } },
  { key: 'img', optional: { type: 'string', min: 6, max: 150, required: true } },
);


