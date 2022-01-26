const router = require('express').Router();
const User = require('../models/user')
const { registerValidation } = require('../validation');


router.post('/register', async (req,res) =>{

    //
    
    try{
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        res.status(201).json({ status: "success", user: user});
    } catch(error){
        res.status(404).json({
            status: "error",
            message: error
        });
    }
})


module.exports = router