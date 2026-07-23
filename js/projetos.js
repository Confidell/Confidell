const tituloProjeto = document.getElementById("titulo-projeto");
const descricaoProjeto = document.getElementById("descricao-projeto");
const imagemProjeto = document.getElementById("imagem-projeto");
const botaoProjeto = document.getElementById("botao-projeto");
const anteriorProjeto = document.getElementById("anterior-proj");
const proximoProjeto = document.getElementById("proximo-proj");
const indicadores = document.querySelector(".indicadores");
let indiceProjeto = 0;

const projetos = [
    {
        titulo: "Belle Couture",
        descricao:
        "Sistema web desenvolvido para gerenciamento de pedidos de uma cafeteria.",
        imagem: "../assets/images/Belle-couture.jpg",
        link: "https://luizaraujo-faria.github.io/Belle-Couture/index.html"
    },
    {
        titulo: "World Speed",
        descricao:
        "Site institucional desenvolvido utilizando HTML, CSS e JavaScript.",
        imagem: "../assets/images/World-speed.jpg",
        link: "https://luizaraujo-faria.github.io/World-Speed/index.html"
    },
    {
        titulo: "Cine Comédia",
        descricao:
        "Controle de acesso utilizando ESP32 e leitores RFID.",
        imagem: "../assets/images/Cine-comedia.jpg",
        link: "https://luizaraujo-faria.github.io/Cine-Comedia/index.html"
    },
        {
        titulo: "a",
        descricao:
        "a.",
        imagem: "./assets/imagens/rfid.png",
        link: "#"
    },
        {
        titulo: "b",
        descricao:
        "b.",
        imagem: "./assets/imagens/rfid.png",
        link: "#"
    }
];

function criarIndicadores() {

    indicadores.innerHTML = "";
    projetos.forEach((projeto, indice) => {

        const indicador = document.createElement("span");
        indicador.classList.add("indicador");

        if (indice === indiceProjeto) {
            indicador.classList.add("ativo");
        }

        indicador.addEventListener("click", () => {
            indiceProjeto = indice;
            atualizarProjeto();
        });

        indicadores.appendChild(indicador);
    });
}

function atualizarProjeto(){

    const projeto = projetos[indiceProjeto];
    tituloProjeto.textContent = projeto.titulo;
    descricaoProjeto.textContent = projeto.descricao;
    imagemProjeto.src = projeto.imagem;
    botaoProjeto.href = projeto.link;

    document
        .querySelectorAll(".indicador")
        .forEach((indicador, indice) => {

            indicador.classList.toggle("ativo", indice === indiceProjeto);

        });
}

proximoProjeto.addEventListener("click", ()=>{
    indiceProjeto++;

    if(indiceProjeto >= projetos.length){
        indiceProjeto = 0;
    }

    atualizarProjeto();
});

anteriorProjeto.addEventListener("click", ()=>{
    indiceProjeto--;

    if(indiceProjeto < 0){
        indiceProjeto = projetos.length-1;
    }

    atualizarProjeto();
});

setInterval(() => {
    proximoProjeto.click();
}, 5000);

criarIndicadores();
atualizarProjeto();