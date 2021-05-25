const btnSalvar = document.querySelector("[data-btnSalvar]")

    btnSalvar.addEventListener('click', () => {
    const conteudo = document.querySelector("[data-conteudo]").innerText
    const tituloDoProjeto = document.querySelector("[data-projetoTitulo]").value
    const descricaoDoProjeto = document.querySelector("[data-projetoDescricao]").value
    
    const projeto = {
        conteudo,
        tituloDoProjeto,
        descricaoDoProjeto,
    }

    return projeto
})