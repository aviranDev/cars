import express from 'express'
import models from '../routes/models.js';
import brands from '../routes/brands.js';
import admin from '../routes/admin.js';

const router = express();
router.use('/admin', admin);
router.use('/models', models);
router.use('/brands', brands);

export default router;