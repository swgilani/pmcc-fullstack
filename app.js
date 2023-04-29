const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DataObject = require('./models/DataObjectModel');
const axios = require('axios');


const NOT_FOUND_ERROR = "No psets found";
const SERVER_ERROR= "Internal server error";

mongoose.connect(
    "mongodb+srv://root:root@development-cluster-ptdz3.azure.mongodb.net/orcestra-new?retryWrites=true&w=majority"
);

app.get('/api/pset-database',  async(req,res) => {
    try {
        const dataObject = await DataObject.find();
        if (dataObject.length > 0) {
            res.status(200).json(dataObject)
        } else {
            console.log(dataObject);
            res.status(404).json({ message: NOT_FOUND_ERROR });
        }
    } catch(ex) {
        res.status(500).send({
        message: SERVER_ERROR,
        exception: ex.toString()
        });
    }
});

app.get('/api/psets', async (req,res) => {
    try {
        const psetsResponse = await axios.get('https://www.orcestra.ca/api/psets/canonical');
        res.status(psetsResponse.status).send(psetsResponse.data);
    } catch(ex) {
        res.status(500).send({
            message: SERVER_ERROR,
            exception: ex.toString()
            });  
    }
});


app.listen(3005, () => {
    console.log('Server up and rdunning...');
})