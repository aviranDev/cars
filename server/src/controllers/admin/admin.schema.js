// import { Rita } from '../../middlewares/validation/Rita.js';
import erita from 'erita';

export const signupSchema = erita.schema(
  { key: 'user_id', optional: { type: 'string', regex: /^\d{7,9}$/, ms: 'must be between 6-9 digits', required: true } },
  { key: 'username', optional: { type: 'string', min: 6, max: 150, required: true } },
  { key: 'password', optional: { type: 'string', min: 6, max: 150, required: true } },
);

export const loginSchema = erita.schema(
  {
    key: 'user_id',
    optional: { type: 'string', regex: /^\d{7,9}$/, ms: 'must be between 6-9 digits', required: true }
  },
  {
    key: 'password',
    optional: { type: 'string', min: 6, max: 150, required: true }
  },
);