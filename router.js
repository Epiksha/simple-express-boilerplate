const express = require('express');

const router = express.Router();

router.get('/index.html', (req, res, next) => {
    res.send('Hello');
    next();
});

module.exports = router;