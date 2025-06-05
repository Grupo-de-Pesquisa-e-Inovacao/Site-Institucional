// Validação de Usuário
// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_PESSOA_JURIDICA;
    var nome = sessionStorage.RAZAO_PESSOA_JURIDICA;
    var cnpj = sessionStorage.CNPJ_PESSOA_JURIDICA;

    var b_usuario = document.getElementById("b_usuario");
    // var loginUsuario = document.getElementById("botaoLogin");
    // var botaoDashboard = document.getElementById("botaoDashboard");

    // var cnpj = document.getElementById("cnpj");


    if (email != null && nome != null) {
        // b_usuario.innerHTML = `Olá, ${nome}!`;

        // document.getElementById('b_usuario').removeAttribute('href');
        // b_usuario.style.cursor = "default";
        // b_usuario.style.userSelect = "none";

        // // botaoDashboard.style.visibility = "visible";

        // loginUsuario.style.display = "none";

        console.log(`
            Validou sessão com: \n
            Nome: ${nome} \n
            Email: ${email} \n
            CNPJ: ${cnpj}
            `)
    } else {

    }
}



// Dados do Setor 1 - KPI 1
function buscarDadosSetor1() {

    var idUsuario = sessionStorage.getItem("ID_PESSOA_JURIDICA");

    fetch("/dashboard/buscarDadosSetor1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: idUsuario
        }),
    }).then(function (resposta) {
        // console.log("ESTOU NO THEN DO exibirMedia()!")

        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log(`\n == Função buscarDadosSetor1() \nDados recebidos: ${JSON.stringify(resposta)}`)

                for (var i = 0; i < resposta.length; i++) {
                    temperatura = resposta[i].Temperatura
                    console.log(`${temperatura} \n`)

                    temperaturaAviario1.innerHTML = temperatura;

                    if (temperatura < 21 || temperatura > 26) {
                        temperaturaAviario1.style.color = "red";
                    } else {
                        temperaturaAviario1.style.color = "green";
                    }
                }

                // plotarDadosTemperaturaAviario(resposta)

            })

        } else {

            console.log("Houve um erro ao tentar exibir a Temperatura Atual dos Aviários!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}


// Setor 2
function buscarDadosSetor2() {

    var idUsuario = sessionStorage.getItem("ID_PESSOA_JURIDICA");

    fetch("/dashboard/buscarDadosSetor2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: idUsuario
        }),
    }).then(function (resposta) {
        // console.log("ESTOU NO THEN DO exibirMedia()!")

        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log(`\n == Função buscarDadosSetor2() \nDados recebidos: ${JSON.stringify(resposta)}`)

                for (var i = 0; i < resposta.length; i++) {
                    temperatura = resposta[i].Temperatura
                    console.log(`${temperatura} \n`)

                    temperaturaAviario2.innerHTML = temperatura;
                    
                    if (temperatura < 21 || temperatura > 26) {
                        temperaturaAviario2.style.color = "red";
                    } else {
                        temperaturaAviario2.style.color = "green";
                    }
                }

                // plotarDadosTemperaturaAviario(resposta)

            })

        } else {

            console.log("Houve um erro ao tentar exibir a Temperatura Atual dos Aviários!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}



// Setor 3
function buscarDadosSetor3() {

    var idUsuario = sessionStorage.getItem("ID_PESSOA_JURIDICA");

    fetch("/dashboard/buscarDadosSetor3", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: idUsuario
        }),
    }).then(function (resposta) {
        // console.log("ESTOU NO THEN DO exibirMedia()!")

        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log(`\n == Função buscarDadosSetor3() \nDados recebidos: ${JSON.stringify(resposta)}`)

                for (var i = 0; i < resposta.length; i++) {
                    temperatura = resposta[i].Temperatura
                    console.log(`${temperatura} \n`)

                    temperaturaAviario3.innerHTML = temperatura;

                    if (temperatura < 21 || temperatura > 26) {
                        temperaturaAviario3.style.color = "red";
                    } else {
                        temperaturaAviario3.style.color = "green";
                    }
                }

                // plotarDadosTemperaturaAviario(resposta)

            })

        } else {

            console.log("Houve um erro ao tentar exibir a Temperatura Atual dos Aviários!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}










// function plotarDadosTemperaturaAviario(resposta) {

//     console.log('\nIniciando plotagem do gráfico de Dados dos Aviários');

//     let labels = [];

//     var valores = [];
    
//     var dtRegistro = [];

//     console.log(resposta)

//     for (i = 0; i < resposta.length; i++) {
//         var registro = resposta[i];

//         labels.push(registro.SetorNome);
        
//         valores.push(registro.Temperatura);
        
//         dtRegistro.push(registro.DtRegistro);
//     }

//     console.log('\nO gráfico será plotado com os respectivos valores:')
//     console.log('Labels:');
//     console.log(labels);
//     console.log('\nDados:');
//     console.log(valores);
//     console.log('\nData:');
//     console.log(dtRegistro);

//     const ctx = document.getElementById('graficoLinha1');

//     Chart.defaults.color = '#fff';
//     Chart.defaults.borderColor = '#333';

//     new Chart(ctx, {

//         type: 'line',
//         data: {
//             labels: [],
//             datasets: [{
//                 label: 'Setor 1',
//                 data: [valores[0]],
//                 borderColor: 'blue',
//                 fill: false,
//                 tension: 0.1
//             },
//             {
//                 label: 'Setor 2',
//                 data: [valores[1]],
//                 borderColor: 'red',
//                 fill: false,
//                 tension: 0.1
//             },
//             {
//                 label: 'Setor 3',
//                 data: [valores[2]],
//                 borderColor: 'green',
//                 fill: false,
//                 tension: 0.1
//             }],
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             plugins: {
//                 title: {
//                     display: true,
//                     text: 'Registro de Temperatura ºC por Hora',
//                     font: {
//                         family: 'VT323',
//                         size: 30,
//                         weight: 'normal',
//                     }
//                 },
//                 legend: {
//                     display: true,
//                 },
//                 tooltip: {
//                     bodyFont: {
//                         family: 'VT323',
//                         size: 20
//                     }
//                 }
//             },

//             scales: {
//                 x: {
//                     ticks: {
//                         font: {
//                             family: 'VT323',
//                             size: 20
//                         }
//                     }
//                 },
//                 y: {
//                     ticks: {
//                         font: {
//                             family: 'VT323',
//                             size: 20
//                         }
//                     }
//                 }
//             }
//         }
//     });
// }