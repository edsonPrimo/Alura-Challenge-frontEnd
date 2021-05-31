const btnExport = document.querySelector('.conteudo__btn-export')

btnExport.addEventListener('click', exportToImg)

function exportToImg () {
   // Convert the div to image (canvas)
   html2canvas(document.getElementById("capture")).then(function(canvas) {
    // Get the image data as JPEG and 0.9 quality (0.0 - 1.0)
    let imgURL = canvas.toDataURL("image/jpeg", 0.9);
    saveAs (imgURL, 'code')

    });

    
}
    