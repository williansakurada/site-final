

if (localStorage.getItem('tema') === 'light') {
    document.body.classList.add('light');
}

function setTheme(mode) {
    if (mode === 'light') {
        document.body.classList.add('light');
        localStorage.setItem('tema', 'light');
    } else {
        document.body.classList.remove('light');
        localStorage.setItem('tema', 'dark');
    }
}

if (localStorage.getItem("acessoPermitido") !== "true") {
    let nome = prompt("Bem-vindo ao site! Qual é o seu nome?");
    let idade = parseInt(prompt("Olá, " + nome + "! Qual é a sua idade?"));

    if (idade >= 18) {
        alert("Parabéns, " + nome + "! Seu acesso foi liberado!");
        localStorage.setItem("acessoPermitido", "true");
        document.getElementById("conteudo-sensivel").style.filter = "none";
        document.getElementById("age-verification").style.display = "none";
    } else {
        alert("Acesso negado para menores!");
        document.getElementById("conteudo-sensivel").style.filter = "blur(20px)";
    }
} else {
    document.getElementById("conteudo-sensivel").style.filter = "none";
    document.getElementById("age-verification").style.display = "none";
}