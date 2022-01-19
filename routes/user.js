const router = require('express').Router();
const mongoose = require('mongoose')
const Users = require('../models/user')

router.get('/test', (req,res) => {
    res.send("test")
})

router.post('/register', async(req,res) =>{
    const user = new Users({
        _id: mongoose.Types.ObjectId(),
        username: req.body.username,
        email: req.body.email,
        password: req.body.password  
    })
    const savedUser = await user.save();
    try{
        res.status(200).send({message: 'USER HAS BEEN REGESTRED :) !'})
    } catch(error){
        res.status(500).send(error)
    }
})


module.exports = {
    router
};