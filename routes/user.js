const router = require('express').Router();
const app = require('express');
const User = require('../models/user')
const { registerValidation } = require('../validation');
const bcrypt = require('bcryptjs')


router.post('/register', async (req,res) =>{

    //Data Validation 
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const existingUser = await User.findOne({email:req.body.email});

    //check if email exist
    if(existingUser) return res.status(400).send({message: 'EMAIL ALREADY EXIST'})

    // hash password 
    const salt = await bcrypt.genSalt(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    
    try{
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword
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