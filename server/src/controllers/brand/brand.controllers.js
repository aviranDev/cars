import { Router } from 'express';
import create from '../../crud/create.js';
import Brand from '../../Models/Brand.js';
import Admin from '../../Models/Admin.js';
import erita from 'erita';
import authenticate from '../../middlewares/authentication/auth.collector.js';
import validateId from '../../middlewares/validation/valid.idParams.js';
import remove from '../../crud/remove.js';
import update from '../../crud/update.js';
import brandSchema from './brand.schema.js';
import read from '../../crud/read.js';
const router = Router();

export const build = router.post('/create-brand',
  erita.validate(brandSchema),
  authenticate.token,
  authenticate.existenceUser({ Model: Admin }),
  create({ Model: Brand })
);

export const edit = router.put('/edit-brand/:id',
  validateId,
  erita.validate(brandSchema),
  authenticate.token,
  authenticate.existenceUser({ Model: Admin }),
  update({ Model: Brand })
);

export const load = router.get('/load-data',
  read.allDocuments({ Model: Brand }));

export const readBrand = router.get('/read-brand/:id',
  read.documentByKey({ Model: Brand, key: '_id' }));


export const deleteBrand = router.delete('/remove-brand/:id',
  validateId,
  authenticate.token,
  authenticate.existenceUser({ Model: Admin }),
  remove.documentbyId({ Model: Brand })
);

export default {
  build,
  load,
  readBrand,
  edit,
  deleteBrand
};