'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('mother', {
        name: 'Ethel', comment: 'Ethel is a retired computer programmer who started her career at IBM in the 1960.At IBM she had to keep her wedding ring at home in order to maintain her job.She loves growing roses and is a fantastic baker.' });
});

module.exports = router;