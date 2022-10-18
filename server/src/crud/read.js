import clientError from '../errorsHandler/error.controller.js';

/**
 * Read all documents of a model
 * @param {*} data Model
 * @returns list of array with all documents 
 */
const allDocuments = (data) => {
  const Model = data.Model;
  return async (req, res, next) => {
    const data = await Model.find({});
    if (!data) return next(clientError.messanger(404, 'Not Found'))
    res.send(data);
  };
};

/**
 * Read documents by id
 * @param {*} data Model, key
 * @returns document
 */
const documentByKey = (data) => {
  const Model = data.Model;
  const key = data.key;
  return async (req, res, next) => {
    const data = await Model.findOne({ [key]: req.params.id });
    if (!data) return next(clientError.messanger(404, `${req.params.id} Not Found`));
    res.send(data);
  };
};

/**
 * Read Ownner document by id
 * @param {*} data Model, key
 * @returns 
 */
const OwnnerDocumentById = (data) => {
  const Model = data.Model;
  const key = data.key;
  const forenKey = data.forenKey;
  return async (req, res, next) => {
    const data = await Model.findOne({ [key]: req.params.id, [forenKey]: req.user._id });
    if (!data) return next(clientError.messanger(404, `${req.params.id} Not Found`));
    res.send(data);
  };
};

/**
 * Read Ownner all documents
 * @param {*} data Model, key
 * @returns 
 */
const OwnnerAllDocuments = (data) => {
  const Model = data.Model;
  const forenKey = data.forenKey;
  return async (req, res, next) => {
    const data = await Model.find({ [forenKey]: req.user._id });
    if (!data) return next(clientError.messanger(404, `${req.params.id} Not Found`));
    res.send(data);
  };
};

export default {
  allDocuments,
  documentByKey,
  OwnnerDocumentById,
  OwnnerAllDocuments
};