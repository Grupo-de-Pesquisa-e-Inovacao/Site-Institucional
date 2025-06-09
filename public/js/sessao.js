// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_PESSOA_JURIDICA;
    var nome = sessionStorage.RAZAO_PESSOA_JURIDICA;
    var cnpj = sessionStorage.CNPJ_PESSOA_JURIDICA;

    var b_usuario = document.getElementById("b_usuario");
    var loginUsuario = document.getElementById("botaoLogin");
    var botaoDashboard = document.getElementById("botaoDashboard");

    var cnpj = document.getElementById("cnpj");


    if (email != null && nome != null) {
        b_usuario.innerHTML = `Olá, ${nome}!`;

        document.getElementById('b_usuario').removeAttribute('href');
        b_usuario.style.cursor = "default";
        b_usuario.style.userSelect = "none";

        botaoDashboard.style.display = "flex";

        loginUsuario.style.display = "none";

        if (email == 'n3@avitrack.com' && nome == 'Admin N3') { 
            botaoBobIA.style.display = "flex";
        }

        console.log(`
            Validou sessão com: \n
            Nome: ${nome} \n
            Email: ${email} \n
            CNPJ: ${cnpj}
            `)
    } else {

    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "./Login.html";
}