const DataObject = require("./models/DataObjectModel");
const axios = require("axios");

const CONFIG = require('./config');

const NOT_FOUND_ERROR = "No psets found";
const SERVER_ERROR = "Internal server error";

module.exports = function(app) {

  app.get("/api/pset-database", (async (req, res) => {
    try {
      const dataObject = await DataObject.find();
      if (dataObject.length > 0) {
        res.status(200).json(dataObject);
      } else {
        res.status(404).json({
          message: NOT_FOUND_ERROR
        });
      }
    } catch (ex) {
      res.status(500).send({
        message: SERVER_ERROR,
        exception: ex.toString()
      });
    }
  }));

  app.get("/api/psets", (async (req, res) => {
    try {
      const psetsResponse = await axios.get(CONFIG.external.orcestraPsetsUrl);
      res.status(psetsResponse.status).send(psetsResponse.data);
    } catch (ex) {
      res.status(500).send({
        message: SERVER_ERROR,
        exception: ex.toString()
      });
    }
  }));
};