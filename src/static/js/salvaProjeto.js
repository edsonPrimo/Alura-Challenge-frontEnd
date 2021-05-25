const btnSalvar = document.querySelector("[data-btnSalvar]")
    
const projeto = btnSalvar.addEventListener('click', () => {
    const conteudo = document.querySelector("[data-conteudo]").innerText
    const tituloDoProjeto = document.querySelector("[data-projetoTitulo]").value
    const descricaoDoProjeto = document.querySelector("[data-projetoDescricao]").value

    const projetoNovo = {
        conteudo,
        tituloDoProjeto,
        descricaoDoProjeto,
    }
    
    const projetos = JSON.parse(localStorage.getItem("projetos")) || []
    const projetosAtualizados = [...projetos, projetoNovo] 

    localStorage.setItem("projetos", JSON.stringify(projetosAtualizados))

})



