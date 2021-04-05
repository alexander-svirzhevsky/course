const express = require('express');
const router = express.Router();

// @route    GET API/profile
// @desc     Test route
// @acccess  Puplic
router.get('/', (req, res) => res.send('profile route'));

module.exports = router;