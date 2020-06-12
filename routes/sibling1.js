'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('sibling1', { name: 'Paul', comment: 'Paul is Ethel and Harold very brave and intellegent son.' });
});

module.exports = router;