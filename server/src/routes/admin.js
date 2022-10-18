import { Router } from 'express';
import admin from '../controllers/admin/admin.controller.js';
const router = Router();

router.use(
  admin.register,
  admin.login
);

export default router;