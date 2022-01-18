//seleciona uma tag do documento html, e adiciona um evento quando receber um click
document.querySelector('.open-menu').addEventListener('click', e => {
    //adiciona a classe open e adiciona no header .menu
    document.querySelector('header .menu').classList.add('open');
});

document.querySelector('.close-menu').addEventListener('click', e => {
    document.querySelector('header .menu').classList.remove('open');
});

document.querySelector('.menu .backdrop').addEventListener('click', e => {
    document.querySelector('header .menu').classList.remove('open');
});