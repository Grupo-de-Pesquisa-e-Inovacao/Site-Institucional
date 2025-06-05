var database = require("../database/config");


// KPI 1
function buscarDadosSetor1(idUsuario) {
    var instrucao = `
    select * from dadosAviario where idSetor = 1 and idSensor = 1 and idAviario = ${idUsuario};
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDadosSetor2(idUsuario) {
    var instrucao = `
    select * from dadosAviario where idSetor = 2 and idSensor = 2 and idAviario = ${idUsuario};
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDadosSetor3(idUsuario) {
    var instrucao = `
    select * from dadosAviario where idSetor = 3 and idSensor = 3 and idAviario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarDadosSetor1,
    buscarDadosSetor2,
    buscarDadosSetor3
}