import dotenv from 'dotenv';
dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;
const MONGO_URL = process.env.MONGO_URL || null;

const MONGO = {
  host: MONGO_URL,
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URL}`,
};

const SERVER_HOSTNAME = process.env.HOST_NAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3900;
const SERVER_TOKEN_SECRET = process.env.PRIVET_KEY || 'mytoken';

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
  token: {
    secret: SERVER_TOKEN_SECRET,
  },
};
const config = {
  mongo: MONGO,
  server: SERVER,
};

export default config;
