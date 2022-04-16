var express = require('express')
var router = express.Router()
var data = require('../data.json')

router.get('/', function (req,res,next) {
    // res.send('respond with a resource movie list')
    res.json(data)
})

module.exports = router