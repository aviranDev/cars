import brands from '../json/brands.json' assert {type: 'json'};
import Brand from '../Models/Brand.js';
import mongoDB from '../db/db.js';
import seed from './seeder.js';
import Data from './Data.js';
mongoDB();

const props = new Data(Brand, brands);

switch (process.argv[2]) {
  case '-d': {
    seed.deleteData(props)
    break;
  }
  default: {
    seed.importData(props)
  }
}