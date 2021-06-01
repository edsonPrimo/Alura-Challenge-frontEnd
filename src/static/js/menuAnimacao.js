const btnMenu = document.querySelector("[data-icone]")
const menu = document.querySelector("[data-hamburguer]")
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__open')
    btnMenu.classList.toggle('overflow')
})


const popup = document.querySelector('[data-export="popup-btn"]')
const exportDetails = document.querySelector('[data-export="details"]')
popup.addEventListener('click', () => {
    exportDetails.classList.toggle('hide')
})