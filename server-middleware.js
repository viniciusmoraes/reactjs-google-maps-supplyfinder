var express = require('express')
var axios = require('axios')
var cors = require('cors')
var app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.post('/location', function (req, res, next) {
    axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=')
        .then(function (response) {
            // handle success
            res.json(response.data)
        })
        .catch(function (error) {
            // handle error
            res.json(error)
        })
})

app.listen(3001, function () {
    console.log('CORS-enabled web server listening on port 3001')
})