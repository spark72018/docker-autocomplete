const express      = require("express");
const cors         = require("cors");
const bodyParser   = require("body-parser");
const routes       = require("./routes");
require("dotenv").config();

const app  = express();
const port = process.env.NODE_PORT || 8080;

function start() {
    return  app.use(cors())
        .use(bodyParser.urlencoded({ extended: false }))
        .use(bodyParser.json())
        .use("/api/states", routes)
        .use((req, res) => res.status(404).json({ success: false, error: "Route not found" }))
        .listen(port, () => console.log(`Server ready on port ${port}`));

}

module.exports = {
    start
};