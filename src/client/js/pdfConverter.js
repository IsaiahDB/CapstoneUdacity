const html2pdf = require('html2pdf.js')


const pdfClick = document.getElementById("pdf-button")

pdfClick.addEventListener('click', pdfConverter)

// Will convert html of vacation data to pdf
function pdfConverter() {
    let ele = document.getElementById('destination_information');
    return html2pdf(ele)
}

export {
    pdfConverter
}