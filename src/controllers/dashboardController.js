var dashboardModel = require("../models/dashboardModel");

// Dados do Setor 3
function buscarDadosSetor1(req, res) {
    var idUsuario = req.body.idServer;

    dashboardModel.buscarDadosSetor1(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDadosSetor2(req, res) {
    var idUsuario = req.body.idServer;

    dashboardModel.buscarDadosSetor2(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDadosSetor3(req, res) {
    var idUsuario = req.body.idServer;

    dashboardModel.buscarDadosSetor3(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarDadosSetor1,
    buscarDadosSetor2,
    buscarDadosSetor3
}