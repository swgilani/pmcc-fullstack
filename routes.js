const express = require('express');
const router = express.Router();
const DataObject = require("./models/DataObjectModel");
const axios = require("axios");

const CONFIG = require('./config');

const NOT_FOUND_ERROR = "No psets found";
const SERVER_ERROR = "Internal server error";



router.get("/pset-database", async (req, res) => {
  try {
    const dataObject = await DataObject.find();
    if (dataObject.length > 0) {
      res.status(200).json(dataObject);
    } else {
      res.status(404).json({
        message: NOT_FOUND_ERROR,
      });
    }
  } catch (ex) {
    res.status(500).send({
      message: SERVER_ERROR,
      exception: ex.toString(),
    });
  }
});

router.get("/psets", async (req, res) => {
  try {
    const psetsResponse = await axios.get(CONFIG.external.orcestraPsetsUrl);
    res.status(psetsResponse.status).send(psetsResponse.data);
  } catch (ex) {
    res.status(500).send({
      message: SERVER_ERROR,
      exception: ex.toString(),
    });
  }
});

module.exports = router;
