document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.nav__list').classList.toggle('active');
    document.querySelector('.header__burger').classList.toggle('active');
    document.body.classList.toggle('lock');
});

document.querySelector('.header__burger-desktop').addEventListener('click', () => {
    document.querySelector('.nav__list').classList.toggle('active');
    document.querySelector('.header__burger-desktop').classList.toggle('active');
    document.body.classList.toggle('lock');
});
