const dotenv = require("dotenv")
dotenv.config()
projectData = {};

const path = require("path")
const express = require("express")

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const cors = require("cors")
app.use(cors())

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/all', function sendData(request,response ){
    response.send(projectData)
});


app.post('/add', addData);
function addData(request, response) {
    let data = request.body;
    console.log('server side data', data)
    projectData['date'] = data.date;
    projectData['weather'] = data.weather;
    projectData['photo'] = data.photo

    // projectData["date"] = data;
    // projectData["temp"] = data;
    // projectData['des'] = data;
    // projectData["feelings"] = data;
    // projectData["content"] = data;

    response.send(projectData)
}