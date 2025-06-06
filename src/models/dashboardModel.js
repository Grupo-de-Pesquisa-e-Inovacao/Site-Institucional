var database = require("../database/config");


// KPI 1
function buscarDadosSetor(idUsuario) {
    var instrucao = `
    select * from dadosAviario where idSetor = 1 and idSensor = 1 and idAviario = ${idUsuario} limit 1;
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarDadosSetor
}