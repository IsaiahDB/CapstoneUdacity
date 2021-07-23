const dotenv = require("dotenv")
dotenv.config()

const path = require("path")
const express = require("express")
const fetch = require("node-fetch")
let projectData = {}

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

app.listen(8020, function () {
    console.log('Example app listening on port 8020!')
})


app.get('/all', function sendData(request,response ){
    response.send(projectData)
});

const geoUser = process.env.GEO_USER  //'isaiah'
const wApi = process.env.WEATHER_API_KEY   //'74c95ff83482407db3c55956cd979f60'
const pApi = process.env.PIXABY_API_KEY  //'13827219-eabca8d6c1f49e20bd7fd6c27'


app.post('/TravelData', addData);
function addData(req, res) {
    let data = req.body;
    console.log('server side data ', data)
    projectData['general'] = data;

    response.send(projectData);
}

