const dotenv = require("dotenv")
dotenv.config()

const path = require("path")
const express = require("express")
const fetch = require("node-fetch")
const projectData ={}

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const cors = require("cors")
const { response } = require("express")
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


app.post('/TravelData', TravelData);
function TravelData(req, res) {
    let data = req.body;
    console.log('getting server data', data)
    projectData['geoLan'] = data;
    response.send(projectData)
}

