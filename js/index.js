const burgerMenu = document.querySelector('.burger-menu')
const burgerNavigation = document.querySelector('.header__burger')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('close')
    burgerNavigation.classList.toggle('active')
})