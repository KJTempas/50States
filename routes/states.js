var express = require('express')
var States = require('../models').States

var router = express.Router()

//this route is used for GET requests for all states
router.get('/states', function(req, res, next) {
    States.findAll({order: ['name']})
        .then( states => {
            return res.json(states) //data will be returned in JSON format
        })
        .catch( err => next(err ))
})

//this route is for requests for individual states
router.get('/states/:name', function(req, res, next) {
    States.findOne({where: {name: req.params.name}}) //use findOne method with state name to query dbase
    .then(state => {
        if(state) {  //if state in db, return response in as json
            return res.json(state)
        } else {  //if state is not in dbase; return 404 not found
            return res.status(404).send()
        }
    })
    .catch( err => next.err() ) //send errors to error handlers
})

//have state name in path to match patch request to state name
router.patch('/state/:name', function(req, res, next) {
    States.update({ visited: req.body.visited }, { where: {
                name: req.params.name
    }
})
.then( rows => {
    if (rows) {  //if rows are modified (it's true)
        return res.send('ok')
    } else { //if rows are not modified
        return res.status(404).send()
    }
})  //if unexpected error, pass request to error handler
.catch( err => next.err() )
})

module.exports = router