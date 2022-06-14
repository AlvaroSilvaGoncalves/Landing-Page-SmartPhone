
// indentifica as classes do html
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


// Ao passar o mouse sobre o lado esquerdo, Capata o evento quando executado
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));


//Ao passar o mouse sobre o lado direito, Capata o evento quando executado
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

