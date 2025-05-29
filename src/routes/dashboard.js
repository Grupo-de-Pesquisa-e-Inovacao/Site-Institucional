var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/buscarDadosEmTempoReal", function (req, res) {
  dashboardController.buscarDadosEmTempoReal(req, res);
});

// router.post("/cadastrar", function (req, res) {
//   dashboardController.cadastrar(req, res);
// })

module.exports = router;