var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/buscarDadosSetor", function (req, res) {
  dashboardController.buscarDadosSetor(req, res);
});



module.exports = router;