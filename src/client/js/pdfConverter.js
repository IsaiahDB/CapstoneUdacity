
const pdfClick = document.getElementById("pdf-button")

pdfClick.addEventListener('click', pdfConverter)

function pdfConverter() {
    var ele = document.getElementById('itemTwo');
    return html2pdf(ele)
}

export {
    pdfConverter
}