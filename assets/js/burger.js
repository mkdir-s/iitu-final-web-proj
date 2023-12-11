const burgerButton = document.body.querySelector('.header-nav__burger');
const headerNav = document.body.querySelector('.header-nav');


burgerButton.addEventListener('click', () => {
    headerNav.classList.toggle('header-nav--active'); 
    burgerButton.classList.toggle('header-nav__burger--active');
    document.body.classList.toggle('overflow-hidden');
})