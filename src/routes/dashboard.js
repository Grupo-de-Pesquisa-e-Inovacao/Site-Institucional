var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/buscarDadosSetor1", function (req, res) {
  dashboardController.buscarDadosSetor1(req, res);
});

router.post("/buscarDadosSetor2", function (req, res) {
  dashboardController.buscarDadosSetor2(req, res);
});

router.post("/buscarDadosSetor3", function (req, res) {
  dashboardController.buscarDadosSetor3(req, res);
});


module.exports = router;