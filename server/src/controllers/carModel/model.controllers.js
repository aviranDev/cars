import { Router } from 'express';
import create from '../../crud/create.js';
import authenticate from '../../middlewares/authentication/auth.collector.js';
import { modelSchema } from './model.schema.js';
import validateId from '../../middlewares/validation/valid.idParams.js';
import erita from 'erita';
import update from '../../crud/update.js';
import read from '../../crud/read.js';
import Admin from '../../Models/Admin.js';
import Model from '../../Models/Model.js';
import remove from '../../crud/remove.js';
const router = Router();

const load = router.get('/load-data', read.allDocuments({ Model: Model }));

export const build = router.post('/create-model',
  erita.validate(modelSchema),
  authenticate.token,
  authenticate.existenceUser({ Model: Admin }),
  create({ Model: Model })
);

export const edit = router.put('/edit-model/:id',
  validateId,
  erita.validate(modelSchema),
  authenticate.token,
  authenticate.existenceUser({ Model: Admin }),
  update({ Model: Model })
);

export const readModel = router.get('/read-model/:id',
  read.documentByKey({ Model: Model, key: '_id' }));

const removeModel = router.delete('/remove-model/:id',
  validateId, authenticate.token, authenticate.existenceUser({ Model: Admin }),
  remove.documentbyId({ Model: Model })
);

export default {
  load,
  build,
  readModel,
  removeModel
};