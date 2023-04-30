const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const CONFIG = require('./config');

require("./routes")(app);

mongoose.connect(`mongodb+srv://${CONFIG.db.host}:${CONFIG.db.port}@${CONFIG.db.dbClusterName}?retryWrites=true&w=majority`)
.catch((exception => console.log(exception)));

mongoose.connection.on("error", (exception => console.log(exception)));
mongoose.connection.once("open", (() => console.log("Successfully connected to database")));
app.use(cors());
app.listen(CONFIG.server.port, (() => {
  console.log(`Server up on port ${CONFIG.server.port}`);
}));