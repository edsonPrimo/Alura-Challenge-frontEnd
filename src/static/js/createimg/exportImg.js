
const btnExport = document.querySelector('[data-export="export-btn"]')
const btnDetail = document.querySelector('[data-export="btn-detail"]')


const pegaDados = () => {
    let formato = ''
    let radios = document.getElementsByName('options')

    for (let i = 0; i<radios.length; i++) {
        if( radios[i].checked) {
            formato = radios[i].value
        }
    }
    let fileName = document.querySelector('[data-export="fileName"]').value
    exportToImg(formato, fileName)
}

btnExport.addEventListener('click', pegaDados)
btnDetail.addEventListener('click', pegaDados)

function exportToImg (formato, fileName) {
    // Convert the div to image (canvas)
   console.log(fileName, formato)
   html2canvas(document.getElementById("capture")).then(function(canvas) {
        // Get the image 0.9 quality (0.0 - 1.0)
        let imgURL = canvas.toDataURL(`image/${formato}`, 0.9);
        saveAs (imgURL, `${fileName}`)
    });

    
}
    