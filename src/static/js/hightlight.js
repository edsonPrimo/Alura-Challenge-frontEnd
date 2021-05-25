const areaDoCodigo = document.querySelector('.conteudo__textarea--wrapper')
const linguagem = document.querySelector('.linguagem')
const botao = document.querySelector('[data-btnHLJS]')

const mudaLinguagem = () => {
    const codigo = areaDoCodigo.querySelector('code')
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>"`
    areaDoCodigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})