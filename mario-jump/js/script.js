
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() =>{

        mario.classList.remove('jump')

    }, 500);
}

const loop = setInterval(() =>{

    /*pegando posição left do pipe*/
    const pipePosition = pipe.offsetLeft;
    /*pegando posição bottom do CSS do mario*/
    /*converter str para number com "+"*/
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    /*condição para acabar o jogo
    1- bater no tubo horizontal
    2- o tubo continuar apos o mario passar
    3- bater no tubo vertical 
    */
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        /*parar o loop*/ 
        clearInterval(loop);

    }

}, 10);


document.addEventListener('keydown', jump);