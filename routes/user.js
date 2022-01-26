const router = require('express').Router();
const User = require('../models/user')
const { registerValidation } = require('../validation');


router.post('/register', async (req,res) =>{

    //Data Validation 
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    else {res.send("ok")};
    
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