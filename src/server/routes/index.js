const express    = require("express");
const controller = require("../controllers");
const routes     = express.Router();

routes.route("/autocomplete").get(controller.getStates);

module.exports = routes;