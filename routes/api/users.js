const express = require('express');
const router = express.Router();

// @route    GET API/users
// @desc     Test route
// @acccess  Puplic
router.get('/', (req, res) => res.send('user route'));

module.exports = router;