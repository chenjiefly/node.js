var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.sendFile('/Users/chenjie/ap/style/style-tempo/app.config.js');
    res.sendfile('./views/index.jade');
});

module.exports = router;
