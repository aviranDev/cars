import axios from 'axios';
import config from '../config/server';

const brandsApi = async () => {
  const response = await axios.get(`${config.server.url}/brands/load-data`);
  return response;
};

export default brandsApi;