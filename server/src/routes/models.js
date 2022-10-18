import { Router } from 'express';
import model from '../controllers/carModel/model.controllers.js';
const router = Router();

router.use(
  model.build,
  model.load,
  model.readModel,
  model.removeModel
);

export default router;