const areaDoCodigo = document.querySelector('.conteudo-editor')
const linguagem = document.querySelector('.linguagem')
const botao = document.querySelector('[data-btnHLJS]')

const mudaLinguagem = () => {
    const codigo = areaDoCodigo.querySelector('code')
    codigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor" data-conteudo></code>`
    codigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})