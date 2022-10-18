import models from '../json/models.json' assert {type: 'json'};
import Model from '../Models/Model.js';
import mongoDB from '../db/db.js';
import seed from './seeder.js';
import Data from './Data.js';
mongoDB();

const props = new Data(Model, models);

switch (process.argv[2]) {
  case '-d': {
    seed.deleteData(props)
    break;
  }
  default: {
    seed.importData(props)
  }
}