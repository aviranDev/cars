import axios from 'axios';
import config from '../config/server';

export const modelsApi = async () => {
  const response = await axios.get(`${config.server.url}/models/load-data`);
  return response;
};

export default modelsApi;