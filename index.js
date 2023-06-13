const mudarDeCor = document.querySelector('.cabecalho__menu-hamburguer');
const imgHamburg = document.querySelector('.imagem__hamburguer');

mudarDeCor.addEventListener('click', () => {
    mudarDeCor.classList.toggle('ativado')

    if(mudarDeCor.classList.contains('ativado')){
        imgHamburg.src = 'img/menuAberto.svg';
    }
    else
    {
        imgHamburg.src = 'img/Menu.svg';
    }
    
})