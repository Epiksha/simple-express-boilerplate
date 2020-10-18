const express = require('express');

const userRoutes = require('./routes/userRoutes.js');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('At index.');
});

router.use('/api/user', userRoutes);

module.exports = router;