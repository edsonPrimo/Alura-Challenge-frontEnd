export const salvaProjeto = () => {
       
    const conteudo = document.querySelector("[data-conteudo]").innerText
    const tituloDoProjeto = document.querySelector("[data-projetoTitulo]").value
    const descricaoDoProjeto = document.querySelector("[data-projetoDescricao]").value

    const projetoNovo = {
        conteudo,
        tituloDoProjeto,
        descricaoDoProjeto,
    }

    validaDados(projetoNovo)

    function validaDados (projetoNovo) {
        if ((projetoNovo.tituloDoProjeto.length <= 0) || (projetoNovo.descricaoDoProjeto.length <= 0) || (projetoNovo.conteudo.length <= 0)) {
            alert ('Preencha os campos')
            throw error ("Dados incompletos")
        }
        else adicionaLocalStorage()
    }

    function adicionaLocalStorage () {
        const projetos = JSON.parse(localStorage.getItem("projetos")) || []
        const projetosAtualizados = [...projetos, projetoNovo] 

        localStorage.setItem("projetos", JSON.stringify(projetosAtualizados))
        window.location.href = "./comunidade.html"
    }
}



