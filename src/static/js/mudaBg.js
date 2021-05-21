const selectBg = document.querySelector('.select-bg__input')
    selectBg.addEventListener('change', () => {
     
        console.log(selectBg)
    const corDoContainer = document.querySelector('.conteudo__container-bg')
        corDoContainer.style.backgroundColor=selectBg.value
})