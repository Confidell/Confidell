// HEADER
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const currentScroll = window.scrollY;

    if(currentScroll > lastScroll){
        header.classList.add('hidden');
    }
    else{
        header.classList.remove('hidden');
    }

    lastScroll = currentScroll;
})

// MENU DE NAVEGAÇÃO

const menuBtn = document.querySelector('.menu');
const menubar = document.querySelector('.menubar');
const closeBtn = document.querySelector('.close-btn')

menuBtn.addEventListener('click', () => {
    menubar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    menubar.classList.remove('open');
});

// CARROSSEL MEMBROS
const membros = document.querySelector(".membros");
const cards = document.querySelectorAll(".membro");
const botaoAnteriorEquipe = document.getElementById("anterior-equipe");
const botaoProximoEquipe = document.getElementById("proximo-equipe");
const gap = parseFloat(getComputedStyle(membros).gap);
const mediaQuery = window.matchMedia("(width: 640px)");

let indiceEquipe = 0;

function atualizarEquipe() {

    const container = membros.parentElement;

    const cardAtual = cards[indiceEquipe];

    // MOBILE
    if (mediaQuery.matches) {

        if (indiceEquipe === 0) {

            membros.style.transform = "translateX(0)";

            return;
        }

        const posicaoCard = cardAtual.offsetLeft;

        const centralizacao =
            (container.clientWidth - cardAtual.offsetWidth) / 2;

        const deslocamento =
            posicaoCard - centralizacao;

        membros.style.transform =
            `translateX(-${deslocamento}px)`;

    } else {
        // DESKTOP
        const gap =
            parseFloat(getComputedStyle(membros).gap);

        const larguraCard =
            cardAtual.offsetWidth;

        const passo =
            larguraCard + gap;

        const deslocamentoMaximo =
            membros.scrollWidth - container.clientWidth;

        let deslocamento =
            indiceEquipe * passo;

        deslocamento =
            Math.min(
                deslocamento,
                deslocamentoMaximo
            );

        membros.style.transform =
            `translateX(-${deslocamento}px)`;
    }
}

// PRÓXIMO
botaoProximoEquipe.addEventListener("click", () => {

    if (indiceEquipe < cards.length - 1) {

        indiceEquipe++;

        atualizarEquipe();
    }
});

// ANTERIOR
botaoAnteriorEquipe.addEventListener("click", () => {

    if (indiceEquipe > 0) {

        indiceEquipe--;

        atualizarEquipe();
    }
});


// RESPONSIVIDADE
mediaQuery.addEventListener("change", () => {

    indiceEquipe = 0;

    atualizarEquipe();
});


// REDIMENSIONAMENTO
window.addEventListener("resize", () => {

    atualizarEquipe();
});


// INICIALIZAÇÃO
atualizarEquipe();

//PILARES E CULTURA
const headersResponsivos = document.querySelectorAll('main #sobre .pilares-cultura .titulo-responsivo');

headersResponsivos.forEach(header => {
    header.addEventListener('click', () => {
        const card = header.closest('.card-info');
        
        card.classList.toggle('active');
    });
});