import { Router } from 'express';
import brand from '../controllers/brand/brand.controllers.js';
const router = Router();

//crud
router.use(
  brand.build,
  brand.load,
  brand.readBrand,
  brand.edit,
  brand.deleteBrand
);

export default router;