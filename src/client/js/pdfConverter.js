const html2pdf = require('html2pdf.js')


const pdfClick = document.getElementById("pdf-button")

pdfClick.addEventListener('click', pdfConverter)

function pdfConverter() {
    let ele = document.getElementById('destination_information');
    return html2pdf(ele)
}

export {
    pdfConverter
}