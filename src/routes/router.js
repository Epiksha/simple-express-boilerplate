module.exports = (function() {
    'use strict';

    var router = require('express').Router();

    externalRoutes.get('/', function (req, res) {
        res.send('Root Route!');
    });

    externalRoutes.get('/example', function (req, res) {
        res.send('Example Route!');
    });

    return router;
})();