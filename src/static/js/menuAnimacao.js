const btnMenu = document.querySelector("[data-icone]")
const menu = document.querySelector("[data-hamburguer]")
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__open')
    btnMenu.classList.toggle('overflow')
})

