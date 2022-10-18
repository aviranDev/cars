import { Router } from 'express';
import authorize from '../../middlewares/authorization/auth.collector.js';
import authenticate from '../../middlewares/authentication/auth.collector.js';
import Admin from '../../Models/Admin.js';
import erita from 'erita';
import create from '../../crud/create.js';
import handlePassword from '../../middlewares/operation/operation.hashPassword.js';
import sendToken from './admin.sendToken.js';
import { signupSchema, loginSchema } from './admin.schema.js';
import mongooseValidationSchema from '../../mongo/mongoose.validation.js';
const router = Router();

const register = router.post('/register',
  erita.validate(signupSchema),
  mongooseValidationSchema({
    Model: Admin,
    keys: ["user_id", "username", "password"]
  }),
  authorize.preventByUniqueKey({
    Model: Admin, key: 'user_id', message: 'document already exist', error: 401
  }),
  authorize.preventByBooleanKey({
    Model: Admin, key: 'admin', message: 'admin is already exist', error: 403, boolean: true
  }),
  handlePassword,
  create({ Model: Admin })
);

const login = router.post('/login',
  erita.validate(loginSchema),
  mongooseValidationSchema({
    Model: Admin,
    keys: ["user_id", "password"]
  }),
  authenticate.credentials({ Model: Admin, key: 'user_id' }),
  sendToken
);

export default {
  register,
  login
}