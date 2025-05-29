var database = require("../database/config");

function buscarDadosEmTempoReal(id) {
    var instrucao = `
    select * from temperatura_celcius ;
    `;


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    buscarDadosEmTempoReal
}