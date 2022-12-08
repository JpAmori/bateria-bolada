function play (idTagAudio) {
    const som = document.querySelector(idTagAudio);    

    if (som === null) {
        alert('Som não encontrado')
    }
    else{
        som.play();
    }
}

//Lista de Elementos

const listaDeSons = document.querySelectorAll('.tecla')

//While
/*
while (cont < listaDeSons.length) {
    
    const tecla = listaDeSons[cont];
    const aux = tecla.classList[1];
    const idAudio = `#som_${aux}`;
    
    tecla.onclick = function(){
        play(idAudio)
    };
  
    cont++;
}
*/

for (let cont = 0; cont < listaDeSons.length; cont++) {
    
    const tecla = listaDeSons[cont];
    const aux = tecla.classList[1];
    const idAudio = `#som_${aux}`;
    
    tecla.onclick = function(){
        play(idAudio);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space') {
            tecla.classList.add('ativa');
            console.log("Entrou no Space do onkedown")
        }
        if (evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}

/*
function playClap() {
    document.querySelector('#som_tecla_clap').play();    
}

document.querySelector('.tecla_pom').onclick = playClap;

function playtim() {
    document.querySelector('#som_tecla_tim').play();  
}

document.querySelector('.tecla_pom').onclick = playtim;

function playpuff() {
    document.querySelector('#som_tecla_puff').play();    
}

document.querySelector('.tecla_pom').onclick = playpuff;

function playPom() {
    document.querySelector('#som_tecla_splash').play();    
}

document.querySelector('.tecla_pom').onclick = playsplash;

function playPom() {
    document.querySelector('#som_tecla_toim').play();    
}

document.querySelector('.tecla_pom').onclick = playtoim;

function playPom() {
    document.querySelector('#som_tecla_psh').play();    
}

document.querySelector('.tecla_pom').onclick = playpsh;

function playPom() {
    document.querySelector('#som_tecla_tic').play();    
}

document.querySelector('.tecla_pom').onclick = playtic;

function playPom() {
    document.querySelector('#som_tecla_tom').play();    
}

document.querySelector('.tecla_pom').onclick = playtom;
*/

const mapaTeclado = {
    '1' : 'pom',
    '2' : 'clap',
    '3' : 'tim',
    '4' : 'puff',
    '5' : 'splash',
    '6' : 'toim',
    '7' : 'psh',
    '8' : 'tic',
    '9' : 'tom'
}

//      Array das teclas
// const sounds = [
//     'pom',
//     'clap',
//     'tim',
//     'pugg',
//     'splash',
//     'toim',
//     'psh',
//     'tic',
//     'tom'
// ]

const tDigitadas = (evento) => {
    const tecla = evento.key;
    const teclaT = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;
    if (teclaT()) {
        document.getElementById(mapaTeclado[tecla]).click();    
    }
    for (let i = 0; i < 10 ; i++) {
        if(i === mapaTeclado){
            mapaTeclado.onkeydown = function (evento) {
               tecla.classList.add('ativa');
            }

        }
        mapaTeclado.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
    }
    
}

document.addEventListener('keydown', tDigitadas);






