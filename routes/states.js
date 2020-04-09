var express = require('express')
var States = require('../models').States

var router = express.Router()

//this route is used for GET requests
router.get('/states', function(req, res, next) {
    States.findAll({order: ['name']})
        .then( states => {
            return res.json(states) //data will be returned in JSON format
        })
        .catch( err => next(err ))
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