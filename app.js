const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const pSetsRoutes = require('./routes');

const CONFIG = require('./config');


mongoose.connect(`mongodb+srv://${CONFIG.db.username}:${CONFIG.db.password}@${CONFIG.db.dbClusterName}?retryWrites=true&w=majority`)
.catch((exception => console.log(exception)));

mongoose.connection.on("error", (exception => console.log(exception)));
mongoose.connection.once("open", (() => console.log("Successfully connected to database")));

app.use(cors());
app.use('/api', pSetsRoutes);

app.listen(CONFIG.server.port, (() => {
  console.log(`Server up on port ${CONFIG.server.port}`);
}));