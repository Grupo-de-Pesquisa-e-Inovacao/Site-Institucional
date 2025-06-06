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



let medicao1 = [];
let medicao2 = [];
let medicao3 = [];

let dtRegistro = [];


let myChart;

// Função da plotagem
function plotarDadosTemperaturaAviario() {

    console.log('\nIniciando plotagem do gráfico de Dados dos Aviários');

    const ctx = document.getElementById('graficoLinha1');

    Chart.defaults.color = '#fff';
    Chart.defaults.borderColor = '#333';

    myChart = new Chart(ctx, {

        type: 'line',
        data: {
            labels: dtRegistro,
            datasets: [{
                label: 'Setor 1',
                data: medicao1,
                borderColor: 'blue',
                fill: false,
                tension: 0.1
            },
            {
                label: 'Setor 2',
                data: medicao2,
                borderColor: 'red',
                fill: false,
                tension: 0.1
            },
            {
                label: 'Setor 3',
                data: medicao3,
                borderColor: 'green',
                fill: false,
                tension: 0.1
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Registro de Temperatura ºC por Hora',
                    font: {
                        family: 'Poppins',
                        size: 30,
                        weight: 'normal',
                    }
                },
                legend: {
                    display: true,
                },
                tooltip: {
                    bodyFont: {
                        family: 'Poppins',
                        size: 20
                    }
                }
            },

            scales: {
                x: {
                    ticks: {
                        font: {
                            family: 'Poppins',
                            size: 20
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            family: 'Poppins',
                            size: 20
                        }
                    }
                }
            }
        }
    });
}


// Dados do Setor 1 - KPI 1
function buscarDadosSetor() {

    var idUsuario = sessionStorage.getItem("ID_PESSOA_JURIDICA");

    fetch("/dashboard/buscarDadosSetor", {
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
                    temperatura = resposta[i].Temperatura;
                    dataRegistro = resposta[i].DtRegistro;

                    let numAleatorio = (Math.random() * 1.5)
                    let numAleatorio2 = (Math.random() * 1.5)

                    medicao1.push(temperatura);
                    medicao2.push(Number(temperatura) + Number(numAleatorio));
                    medicao3.push(temperatura - numAleatorio2);
                    dtRegistro.push(dataRegistro);

                    if (medicao1.length > 1) {
                        console.log('myChart antes do update:', myChart);

                        myChart.update();
                    }


                    if (medicao1.length >= 7) {
                        medicao1.splice(0, 1);
                        medicao2.splice(0, 1);
                        medicao3.splice(0, 1);
                        dtRegistro.splice(0, 1);
                    }

                    console.log(`${temperatura} \n`)
                }

                temperatura1 = Math.floor(temperatura - 0);
                temperatura2 = Math.floor(temperatura * 1.1);
                temperatura3 = Math.floor(temperatura - 2.34);

                // KPI 1
                if (temperatura1 < 21 || temperatura1 > 26) {
                    temperaturaAviario1.style.color = "red";
                } else {
                    temperaturaAviario1.style.color = "green";
                }

                // KPI 2
                if (temperatura2 < 21 || temperatura2 > 26) {
                    temperaturaAviario2.style.color = "red";
                } else {
                    temperaturaAviario2.style.color = "green";
                }

                // KPI 3
                if (temperatura3 < 21 || temperatura3 > 26) {
                    temperaturaAviario3.style.color = "red";
                } else {
                    temperaturaAviario3.style.color = "green";
                }

                temperaturaAviario1.innerHTML = `${temperatura1}<span style="color: white;">°C</span>`;
                temperaturaAviario2.innerHTML = `${temperatura2}<span style="color: white;">°C</span>`;
                temperaturaAviario3.innerHTML = `${temperatura3}<span style="color: white;">°C</span>`;


                atualizarDados();
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

function atualizarDados() {
    setTimeout(buscarDadosSetor, 5000);
}


