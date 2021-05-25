export const criaProjeto = ((projeto) => {
    const novoProjeto =
   ` <div class="conteudo-comunidade__container">
			<div class="conteudo-comunidade__bg">
				<div class="conteudo-comunidade__textarea--wrapper">
					<pre><code class="preview hljs" contenteditable="false" aria-label="editor">
${projeto.conteudo}
					</code></pre>
				</div>
			</div>
		<div class="conteudo-comunidade__informacoes">
			<h3 class="conteudo-comunidade__titulo">${projeto.tituloDoProjeto}</h3>
			<p class="conteudo-comunidade__descricao">${projeto.descricaoDoProjeto}</p>
			<div class="hide conteudo-comunidade__feedback">
				<div class="conteudo-comunidade__feedback--like">
					<a href="#" class="conteudo-comunidade__feedback--link">
						<img src="static/images/icon-coment.svg" alt=""><span>1</span>
					</a>
					<a href="#" class="conteudo-comunidade__feedback--link">
						<img src="static/images/icon-like.svg" alt=""><span>1</span>
					</a>
				</div>
				<a href="#" class="client__link">
					<img src="static/images/edson-user.jpg" class="client__foto alt"><span class="client__nome">Edson</span>
				</a> 
			</div>
		</div>
	</div>	
    `
    return novoProjeto

})






