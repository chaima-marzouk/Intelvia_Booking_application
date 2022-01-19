const router = require('express').Router();
// const router = express.Router();
const Users = require('../controller/users')

router.get('/test', (req,res) => {
    res.send("test")
})


module.exports = {
    router
};