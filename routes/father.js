'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('father', { name: 'Harold', comment: 'Harold is very good husband.He always support his wife.' });
});

module.exports = router;