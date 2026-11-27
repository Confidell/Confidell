const tituloProjeto = document.getElementById("titulo-projeto");
const descricaoProjeto = document.getElementById("descricao-projeto");
const imagemProjeto = document.getElementById("imagem-projeto");
const botaoProjeto = document.getElementById("botao-projeto");
const botaoProjetoResponsivo = document.getElementById("botao-projeto-responsivo");
const anteriorProjeto = document.getElementById("anterior-proj");
const proximoProjeto = document.getElementById("proximo-proj");
const indicadores = document.querySelector(".indicadores");
let indiceProjeto = 0;

const projetos = [
    {
        titulo: "Ecommerce Discoffee",
        descricao:
        "Discoffee é uma plataforma de e-commerce voltada ao segmento de cafeterias, desenvolvida para proporcionar uma experiência completa de compra online. O projeto permite explorar o catálogo de produtos, personalizar bebidas, adicionar itens ao carrinho e realizar pedidos, contando com funcionalidades de gerenciamento de usuários, produtos e pedidos.",
        imagem: "./assets/images/Discoffee.png",
        link: "#"
    },
    {
        titulo: "Belle Couture",
        descricao:
        "Belle Couture é uma loja virtual de moda de grife, desenvolvida para apresentar peças de vestuário e destacar coleções de roupas com elegância e sofisticação. O site busca proporcionar uma experiência de navegação intuitiva, permitindo explorar os produtos e conhecer melhor as opções disponíveis, combinando uma identidade visual refinada com uma apresentação moderna.",
        imagem: "./assets/images/Belle-couture.jpg",
        link: "https://luizaraujo-faria.github.io/Belle-Couture/index.html"
    },
    {
        titulo: "World Speed",
        descricao:
        "World Speed é um site informativo dedicado ao Autódromo José Carlos Pace, popularmente conhecido como Autódromo de Interlagos. O projeto apresenta informações sobre a história do circuito, suas características e sua importância para o automobilismo nacional e internacional. A proposta é explorar o universo das corridas e proporcionar aos visitantes uma experiência informativa sobre um dos principais palcos do automobilismo brasileiro.",
        imagem: "./assets/images/World-speed.jpg",
        link: "https://luizaraujo-faria.github.io/World-Speed/index.html"
    },
    {
        titulo: "Cine Comédia",
        descricao:
        "Cine Comédia é um site informativo dedicado ao gênero cinematográfico de comédia, explorando sua história, evolução e características ao longo do tempo. O projeto apresenta informações sobre diferentes estilos de humor, elementos que definem o gênero e sua influência na indústria cinematográfica, proporcionando aos visitantes uma visão mais ampla sobre o universo dos filmes de comédia.",
        imagem: "./assets/images/Cine-comedia.jpg",
        link: "https://luizaraujo-faria.github.io/Cine-Comedia/index.html"
    },
    {
        titulo: "Lethal Walker",
        descricao:
        "Lethal Walker é um jogo de fantasia que mistura elementos de ritmo e estética cinematográfica. Inspirado musicalmente no filme Soul (2020) e narrativamente em Malasartes e o Duelo com a Morte (2017), o jogo acompanha Poe Walker, um vigarista que, ao envelhecer, se vê perseguido pela própria Morte. Seu objetivo é fugir e despistá-la, utilizando suas habilidades e esperteza para escapar de seu destino e continuar vivendo.",
        imagem: "./assets/images/Letal-Walker.jpeg",
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
    botaoProjetoResponsivo.href = projeto.link;

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