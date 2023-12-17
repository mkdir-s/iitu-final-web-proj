const burgerButton = document.body.querySelector('.header-nav__burger');
const headerNav = document.body.querySelector('.header-nav');

// if click to burger button - add active classes to show burger button
burgerButton.addEventListener('click', () => {
    headerNav.classList.toggle('header-nav--active'); 
    burgerButton.classList.toggle('header-nav__burger--active');
    document.body.classList.toggle('overflow-hidden');
})