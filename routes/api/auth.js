const express = require('express');
const router = express.Router();

// @route    GET API/auth
// @desc     Test route
// @acccess  Puplic
router.get('/', (req, res) => res.send('auth route'));

module.exports = router;