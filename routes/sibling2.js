'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('sibling2', { name: 'Rich', comment: 'Rich is very cute and pretty girl' });
});

module.exports = router;