const menuButton = document.querySelector('.ph-list');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('open');
});

menu.addEventListener('click', () => {
    menu.classList.remove('open');
});
