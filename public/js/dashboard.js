// const { default: Annotation } = require("chartjs-plugin-annotation");

// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_PESSOA_JURIDICA;
    var nome = sessionStorage.RAZAO_PESSOA_JURIDICA;
    var cnpj = sessionStorage.CNPJ_PESSOA_JURIDICA;

    // var b_usuario = document.getElementById("b_usuario");
    // var loginUsuario = document.getElementById("botaoLogin");
    // var botaoDashboard = document.getElementById("botaoDashboard");

    // var cnpj = document.getElementById("cnpj");


    if (email != null && nome != null) {
        //     b_usuario.innerHTML = `Olá, ${nome}!`;

        //     document.getElementById('b_usuario').removeAttribute('href');
        //     b_usuario.style.cursor = "default";
        //     b_usuario.style.userSelect = "none";

        //     botaoDashboard.style.visibility = "visible";

        //     loginUsuario.style.display = "none";


        console.log(`
            Validou sessão com: \n
            Nome: ${nome} \n
            Email: ${email} \n
            CNPJ: ${cnpj}
            `)
    } else {

    }
}

function sairSessao() {
    sessionStorage.clear();
    window.location = "./Login.html";
}


let medicao1 = [];
let medicao2 = [];
let medicao3 = [];

let dtRegistro = [];

let myChart1;

// Função da plotagem
function plotarDadosTemperaturaAviario() {

    console.log('\nIniciando plotagem do gráfico de Dados dos Aviários');

    const ctx = document.getElementById('graficoLinha1');

    Chart.defaults.color = '#fff';
    Chart.defaults.borderColor = '#333';

    myChart1 = new Chart(ctx, {

        type: 'line',
        data: {
            labels: dtRegistro,
            datasets: [{
                label: 'Setor 1',
                data: medicao1,
                borderWidth: 4,
                borderColor: 'blue',
                fill: true,
                tension: 0.3,
                pointRadius: 5,
                pointBackgroundColor: '#000',
                pointBorderColor: 'blue',
                pointStyle: 'rectRounded',

                barPercentage: 0.7,
                categoryPercentage: 0.7
            },
            {
                label: 'Setor 2',
                data: medicao2,
                borderWidth: 4,
                borderColor: 'red',
                fill: true,
                tension: 0.3,
                pointRadius: 5,
                pointBackgroundColor: '#000',
                pointBorderColor: 'red',
                pointStyle: 'rectRounded',

                barPercentage: 0.7,
                categoryPercentage: 0.7
            },
            {
                label: 'Setor 3',
                data: medicao3,
                borderWidth: 4,
                borderColor: 'green',
                fill: true,
                tension: 0.3,
                pointRadius: 5,
                pointBackgroundColor: '#000',
                pointBorderColor: 'green',
                pointStyle: 'rectRounded',

                barPercentage: 0.7,
                categoryPercentage: 0.7
            },
            {
                label: 'Quartis 1',
                data: [20, 20, 20, 20, 20, 20, 20],
                borderWidth: 4,
                borderColor: 'red',
                fill: false,
                tension: 0.3,
                pointRadius: 0,
                pointBackgroundColor: '#000',
                pointBorderColor: 'orange',
                pointStyle: 'rectRounded',

                borderDash: [10, 10],

                barPercentage: 0.7,
                categoryPercentage: 0.7
            },
            {
                label: 'Quartis 2',
                data: [23, 23, 23, 23, 23, 23, 23],
                borderWidth: 4,
                borderColor: 'green',
                fill: false,
                tension: 0.3,
                pointRadius: 0,
                pointBackgroundColor: '#000',
                pointBorderColor: 'orange',
                pointStyle: 'rectRounded',

                borderDash: [10, 10],

                barPercentage: 0.7,
                categoryPercentage: 0.7
            },
            {
                label: 'Quartis 3',
                data: [26, 26, 26, 26, 26, 26, 26],
                borderWidth: 4,
                borderColor: 'red',
                fill: false,
                tension: 0.3,
                pointRadius: 0,
                pointBackgroundColor: '#000',
                pointBorderColor: 'orange',
                pointStyle: 'rectRounded',

                borderDash: [10, 10],

                barPercentage: 0.7,
                categoryPercentage: 0.7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: 20
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Relatório de Temperatura',
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
                        size: 10
                    }
                }
            },

            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Data'
                    },
                    ticks: {
                        color: 'lightgray',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Temperatura'
                    },
                    ticks: {
                        stepSize: 0,
                        font: {
                            family: 'Poppins',
                            size: 10
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

                    let numAleatorio = (Math.random() * 1.2)
                    let numAleatorio2 = (Math.random() * 1.2)

                    medicao1.push(Math.floor(temperatura));
                    medicao2.push(Math.floor(Number(temperatura) + Number(numAleatorio)));
                    medicao3.push(Math.floor(temperatura - numAleatorio2));
                    dtRegistro.push(dataRegistro);

                    if (medicao1.length > 1) {
                        console.log('myChart antes do update:', myChart1);

                        myChart1.update();
                    }


                    if (medicao1.length >= 7) {
                        medicao1.splice(0, 1);
                        medicao2.splice(0, 1);
                        medicao3.splice(0, 1);
                        dtRegistro.splice(0, 1);
                    }

                    console.log(`${temperatura} \n`)
                }

                temperatura1 = Math.floor(medicao1[medicao1.length - 1]);
                temperatura2 = Math.floor(medicao2[medicao2.length - 1]);
                temperatura3 = Math.floor(medicao3[medicao3.length - 1]);


                // KPI 1
                if (temperatura1 >= 20 && temperatura1 <= 26) {
                    temperaturaAviario1.style.color = "green";
                    indicador1.style.border = "1px solid green";

                } else if ((temperatura1 >= 18 && temperatura1 < 20) || (temperatura1 > 26 && temperatura1 <= 29)) {
                    temperaturaAviario1.style.color = "orange";
                    indicador1.style.border = "1px solid orange";
                    
                } else if (temperatura1 > 29 || temperatura1 < 18) {
                    temperaturaAviario1.style.color = "red";
                    indicador1.style.border = "1px solid red";
                    regSetor1++;

                    Swal.fire({
                        backdrop: true,
                        icon: "warning",
                        title: "Atenção",
                        text: "O Setor 1 está com a temperatura fora do ideal!",
                        background: "#222",
                        color: '#fff',
                        confirmButtonText: 'Ok!',
                        confirmButtonColor: '#fff45c',
                        customClass: {
                            confirmButton: 'meu-botao-confirmar'
                        },
                        footer: '<a href="https://sptech-team-s3x9skg4.atlassian.net/servicedesk/customer/portal/5" style="color: #fff; text-decoration: underline;">Esta com problemas?</a>'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // Dashboard do Setor
                        }
                    });

                }

                // KPI 2
                if (temperatura2 >= 20 && temperatura2 <= 26) {
                    temperaturaAviario2.style.color = "green";
                    indicador2.style.border = "1px solid green";

                } else if ((temperatura2 >= 18 && temperatura2 < 20) || (temperatura2 > 26 && temperatura2 <= 29)) {
                    temperaturaAviario2.style.color = "orange";
                    indicador2.style.border = "1px solid orange";
                    
                } else if (temperatura2 > 29 || temperatura2 < 18) {
                    temperaturaAviario2.style.color = "red";
                    indicador2.style.border = "1px solid red";
                    regSetoe2++;

                    Swal.fire({
                        backdrop: true,
                        icon: "warning",
                        title: "Atenção",
                        text: "O Setor 2 está com a temperatura fora do ideal!",
                        background: "#222",
                        color: '#fff',
                        confirmButtonText: 'Ok!',
                        confirmButtonColor: '#fff45c',
                        customClass: {
                            confirmButton: 'meu-botao-confirmar'
                        },
                        footer: '<a href="https://sptech-team-s3x9skg4.atlassian.net/servicedesk/customer/portal/5" style="color: #fff; text-decoration: underline;">Esta com problemas?</a>'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // Dashboard do Setor
                        }
                    });
                }

                // KPI 3
                if (temperatura3 >= 20 && temperatura3 <= 26) {
                    temperaturaAviario3.style.color = "green";
                    indicador3.style.border = "1px solid green";
                } else if ((temperatura3 >= 18 && temperatura3 < 20) || (temperatura3 > 26 && temperatura3 <= 29)) {
                    temperaturaAviario3.style.color = "orange";
                    indicador3.style.border = "1px solid orange";

                } else if (temperatura3 > 29 || temperatura3 < 18) {
                    temperaturaAviario3.style.color = "red";
                    indicador3.style.border = "1px solid red";
                    regSetor3++;

                    Swal.fire({
                        backdrop: true,
                        icon: "warning",
                        title: "Atenção",
                        text: "O Setor 3 está com a temperatura fora do ideal!",
                        background: "#222",
                        color: '#fff',
                        confirmButtonText: 'Ok!',
                        confirmButtonColor: '#fff45c',
                        customClass: {
                            confirmButton: 'meu-botao-confirmar'
                        },
                        footer: '<a href="https://sptech-team-s3x9skg4.atlassian.net/servicedesk/customer/portal/5" style="color: #fff; text-decoration: underline;">Esta com problemas?</a>'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // Dashboard do Setor
                        }
                    });
                }



                // Plotando dados nas KPI's
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


