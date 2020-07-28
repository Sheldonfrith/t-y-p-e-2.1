var express = require('express');
const { handleError } = require('../global/utils');
var router = express.Router();
const {testPullQuery} = require('../database/queries');

/* GET test data from database */
router.get('/', function(req, res, next) {
    try {
    testPullQuery().then(
        result =>{
            res.type('json');
            res.send(result);
            return;
        }
    )
    }catch(error) {
        handleError(error, 'test.js');
    }
});

module.exports = router;
