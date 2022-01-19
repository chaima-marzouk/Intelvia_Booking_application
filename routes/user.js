const express = require('express');
const router = express.Router();
const Users = require('../controller/users')

router.get('/register', (res,req) => {
    res.send("you're on register page ")
})

module.exports = router;