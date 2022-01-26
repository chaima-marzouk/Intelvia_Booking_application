const router = require('express').Router();
const userController = require('../controller/users.controller')


router.post('/register', userController.registeration)


module.exports = router