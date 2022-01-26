const router = require('express').Router();
const userController = require('../controller/users')


router.post('/register', userController.registeration)


module.exports = router