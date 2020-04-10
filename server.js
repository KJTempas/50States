var express = require('express')
var bodyParser = require('body-parser')

var states_api = require('./routes/states.js')
var path = require('path')

//creates the express app
var app = express()

//serves the Vue app
app.use(express.static(path.join(__dirname, 'client', 'client', 'dist')))

app.use(bodyParser.json())
//the app is required to used the states_api route(variable created above)
app.use('/api', states_api)

//Error habndlers - fornot found and app errors
app.use(function(req, res, next) {
    res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)  //provide a stack trace with the error
    res.status(500).send('Server error')
})

//start the server running`
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})