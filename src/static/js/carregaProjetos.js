import {criaProjeto} from "./criarProjeto.js"

const divPai = document.querySelector(".conteudo-comunidade")

const projetosCadastrados = JSON.parse(localStorage.getItem('projetos')) || []
const projetosFormatados = []
projetosCadastrados.forEach((projeto) => {
    projetosFormatados.push(criaProjeto(projeto))
})

export const carregaProjetos =  () => {
    divPai.innerHTML = projetosFormatados
}