const express = require("express");
const router = express.Router();

// @route    GET API/posts
// @desc     Test route
// @acccess  Puplic
router.get("/", (req, res) => res.send("posts route"));

module.exports = router;
