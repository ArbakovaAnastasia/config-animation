document.addEventListener('DOMContentLoaded', () => {

    const playButton = document.querySelector('.intro__picture-btn');

    // C
    const animationC = document.getElementById('animationC');
    let isAnimatingC = false;

    function animateC() {
        if (isAnimatingC) return;
        isAnimatingC = true;
        animationC.classList.add('active');
        setTimeout(() => {
            animationC.classList.remove('active');
            isAnimatingC = false;
        }, 2000);
    }
    animationC.addEventListener('mouseenter', animateC);

    // O
    const animationO = document.getElementById('animationO');
    let isAnimatingO = false;
    function animateO() {
        if (isAnimatingO) return;
        isAnimatingO = true;
        animationO.classList.add('active');
        setTimeout(() => {
            animationO.classList.add('square');
        }, 500);
        setTimeout(() => {
            animationO.classList.remove('active');
            animationO.classList.remove('square');
            isAnimatingO = false;
        }, 2000);
    }
    animationO.addEventListener('mouseenter', animateO);

    // N
    const animationN = document.getElementById('animationN');
    const elN1 = animationN.querySelector('.intro__animation-img-N-1');
    const elN2 = animationN.querySelector('.intro__animation-img-N-2');
    const elN3 = animationN.querySelector('.intro__animation-img-N-3');
    let isAnimatingN = false;

    function animateN() {
        if (isAnimatingN) return;
        isAnimatingN = true;
        animationN.classList.add('moved');
        setTimeout(() => {
            animationN.classList.add('show-square');
            elN1.style.opacity = '0';
            elN2.style.opacity = '0';
            elN3.style.opacity = '0';
            setTimeout(() => {
                animationN.classList.add('square-rotate');
                setTimeout(() => {
                    animationN.classList.remove('square-rotate');
                    setTimeout(() => {
                        animationN.classList.remove('show-square');
                        elN1.style.opacity = '1';
                        elN2.style.opacity = '1';
                        elN3.style.opacity = '1';
                        animationN.classList.remove('moved');
                        isAnimatingN = false;
                    }, 600);
                }, 600);
            }, 600);
        }, 300);
    }
    animationN.addEventListener('mouseenter', animateN);

    // F
    const animationF = document.getElementById('animationF');
    let isAnimatingF = false;

    function animateF() {
        if (isAnimatingF) return;
        isAnimatingF = true;
        animationF.classList.add('animate');
        setTimeout(() => {
            animationF.classList.remove('animate');
            isAnimatingF = false;
        }, 1500);
    }
    animationF.addEventListener('mouseenter', animateF);

    // I
    const animationI = document.getElementById('animationI');
    const circle = document.querySelector('.circle');
    const rhomb = document.querySelector('.rhomb');
    let isAnimatingI = false;

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function animateI() {
        if (isAnimatingI) return;
        isAnimatingI = true;

        try {
            circle.classList.add('move-to-center');
            rhomb.classList.add('fadeout-move-center');
            await wait(1000);

            circle.classList.remove('move-to-center');
            circle.classList.add('stretch-oval');
            await wait(1000);

            circle.classList.remove('stretch-oval');
            circle.classList.add('shrink-fadeout');
            rhomb.classList.remove('fadeout-move-center');
            rhomb.classList.add('fadeout-move-center-opacity');
            await wait(1000);

            rhomb.classList.remove('fadeout-move-center-opacity');
            circle.classList.remove('shrink-fadeout');
            rhomb.classList.add('fadein-move-down');
            circle.classList.add('shrink-fadeout-return');
            await wait(1000);

            rhomb.classList.remove('fadein-move-down');
            circle.classList.remove('shrink-fadeout-return');
            circle.style.top = 'calc(50% - 110px)';
            circle.style.left = 'calc(50% - 48px)';
            circle.style.width = '96px';
            circle.style.height = '96px';
            circle.style.borderRadius = '50%';
            circle.style.opacity = '1';
            rhomb.style.top = 'calc(50% + 10px)';
            rhomb.style.left = 'calc(50% - 41.5px)';
        } finally {
            isAnimatingI = false;
        }
    }
    animationI.addEventListener('mouseenter',  animateI);

    // G
    const animationG = document.getElementById('animationG');
    let isAnimatingG = false;

    function animateG() {
        if (isAnimatingG) return;
        isAnimatingG = true;
        animationG.classList.add('animate');
        setTimeout(() => {
            animationG.classList.add('rotate');
        }, 1000);
        setTimeout(() => {
            animationG.classList.remove('rotate');
        }, 2000);
        setTimeout(() => {
            animationG.classList.remove('animate');
            isAnimatingG = false;
        }, 3000);
    }
    animationG.addEventListener('mouseenter', animateG);

    // По кнопке
    playButton.addEventListener('click', () => {
        animateC(); 
        animateO(); 
        animateN();
        animateF();
        animateI();
        animateG(); 
    });
});


