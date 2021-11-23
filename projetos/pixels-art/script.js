const listaPaletasDeCores = document.querySelectorAll('.color');

function geraCorAleatiria() {
    const cor = 'rgb(' + JSON.stringify(Math.ceil(Math.random() * 200)) + ','
        + JSON.stringify(Math.ceil(Math.random() * 200)) + ',' +
        JSON.stringify(Math.ceil(Math.random() * 200)) + ')';

    return cor;
}

listaPaletasDeCores[0].classList.add('black');
listaPaletasDeCores[0].style.backgroundColor = 'black';

// listaPaletasDeCores[1].classList.add('blue');
listaPaletasDeCores[1].style.backgroundColor = geraCorAleatiria();

// listaPaletasDeCores[2].classList.add('red');
listaPaletasDeCores[2].style.backgroundColor = geraCorAleatiria();

// listaPaletasDeCores[3].classList.add('green');
listaPaletasDeCores[3].style.backgroundColor = geraCorAleatiria();

const quadroPixel = document.createElement('div');
quadroPixel.id = 'pixel-board';

const paiQuadroPixel = document.querySelector('main');
paiQuadroPixel.appendChild(quadroPixel);

function pintaPixel(event) {
    const corAtual = document.querySelector('.selected').style.backgroundColor;

    event.target.style.backgroundColor = corAtual;
}

for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';

    const pixelStyle = pixel.style;
    pixelStyle.backgroundColor = 'white';
    pixelStyle.border = 'solid 1px';
    pixelStyle.width = '40px';
    pixelStyle.height = '40px';
    pixelStyle.display = 'inline-block';

    pixel.addEventListener('click', pintaPixel);

    quadroPixel.appendChild(pixel);
}

const preta = document.querySelector('.black');
preta.classList.add('selected');

function selecionaCor(event) {
    let corAntiga = document.querySelector('.selected');
    corAntiga.classList.remove('selected');

    event.target.classList.add('selected');
}

const paletaDeCores = document.querySelectorAll('.color');

for (let i = 0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].addEventListener('click', selecionaCor);
}

function limpaQuadro(event) {
    let listaDePixels = document.querySelectorAll('.pixel');

    for (let i = 0; i < listaDePixels.length; i += 1) {
        listaDePixels[i].style.backgroundColor = 'white';
    }
}

const section1 = document.querySelector('section');

const buttonLimpar = document.createElement('button');
buttonLimpar.id = 'clear-board';
buttonLimpar.textContent = 'Limpar';
buttonLimpar.addEventListener('click', limpaQuadro);
buttonLimpar.style.display = 'inline-block';

section1.appendChild(buttonLimpar);

const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.min = '1';

section1.appendChild(input);

const buttonTamanhpPixel = document.createElement('button');
buttonTamanhpPixel.id = 'generate-board';
buttonTamanhpPixel.innerText = 'VQV';
buttonTamanhpPixel.addEventListener('click', adicionaPixels);

section1.appendChild(buttonTamanhpPixel);

function criarBoard(n) {
    let numeroFileiraColuna = n;
    if (numeroFileiraColuna > 50) {
        numeroFileiraColuna = 50;
    }
    if (numeroFileiraColuna < 5) {
        numeroFileiraColuna = 5;
    }

    let boardAtual = document.querySelectorAll('.pixel');
    let boardPai = document.querySelector('#pixel-board');

    for (let i = 0; i < boardAtual.length; i += 1) {
        boardPai.removeChild(boardAtual[i]);
    }

    let main = document.querySelector('main');
    main.style.width = numeroFileiraColuna * (42) + 'px';


    for (let i = 0; i < (numeroFileiraColuna * numeroFileiraColuna); i++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        pixel.style.border = 'solid 1px';
        pixel.style.width = '40px';
        pixel.style.height = '40px'
        pixel.style.display = 'inline-block'

        pixel.addEventListener('click', pintaPixel);

        quadroPixel.appendChild(pixel);
    }
}


function adicionaPixels(event) {
    let input = document.querySelector('input').value;
    if (input === '') {
        window.alert("Board inválido!");
    } else {
        criarBoard(input);
    }
}
