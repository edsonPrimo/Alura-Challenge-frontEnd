const areaDoCodigo = document.querySelector('.conteudo__container-bg')
const linguagem = document.querySelector('.linguagem')
const botao = document.querySelector('[data-btnHLJS]')

const mudaLinguagem = () => {
    const codigo = areaDoCodigo.querySelector('code').innerText
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor" data-conteudo></code>`;
    areaDoCodigo.firstChild.innerText = codigo
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})