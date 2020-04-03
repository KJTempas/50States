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

module.exports = router