import {carregaProjetos} from "./carregaProjetos.js"
import {salvaProjeto} from "./salvaProjeto.js"

/*salva o projeto e coloca no storage*/
const btnSalvar = document.querySelector('[data-btnSalvar]')
btnSalvar.addEventListener('click', salvaProjeto)

/*carrega a página comunidade*/
//carregaProjetos()

