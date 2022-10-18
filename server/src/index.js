import express from "express";
import morgan from "morgan";
import cors from 'cors';
import config from './config/config.js';
import database from './db/db.js';
import routes from './api/routes.js';
// import error from './handlers/error.js';
import internalError from './errorsHandler/error.internal.js';
import errorHandler from './errorsHandler/error.handler.js';
import clientError from './errorsHandler/error.controller.js';
import portHandler from './tools/tool.port.js';

database()
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', routes);
app.use(clientError.errorResponse);
app.use(internalError, errorHandler);

const port = process.env.PORT || config.server.port;
app.listen(port, portHandler(port));