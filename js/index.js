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

let indiceEquipe = 0;

function atualizarEquipe(){
    const larguraCard = cards[0].offsetWidth + (gap - 30);

    membros.style.transform =
        `translateX(-${indiceEquipe * larguraCard}px)`;
}

botaoProximoEquipe.addEventListener("click",()=>{

    if(indiceEquipe < cards.length - 4){
        indiceEquipe++;
    }

    atualizarEquipe();
});

botaoAnteriorEquipe.addEventListener("click",()=>{

    if(indiceEquipe > 0){
        indiceEquipe--;
    }

    atualizarEquipe();
});