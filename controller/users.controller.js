const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const { registerValidation } = require('../validation');
const { loginValidation } = require('../validation');
const jwt = require('jsonwebtoken');


exports.registeration =  async (req,res) =>{

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
}

exports.login = async (req, res)=>{
    //Data Validation 
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //check if email exist
    const userr = await User.findOne({email:req.body.email})
    if(!userr) return res.status(400).send({message: 'INVALID EMAIL'})

    //Compare password
    const isPasswordCorrect = await bcrypt.compare(req.body.password,userr.password)
    if(!isPasswordCorrect){
        return res.status(400).send({message :`INVALID PASSWORD`})
    }


    //create token

    const payload = {
        username : userr.username,
        role : "client"
    }
    const token = jwt.sign(payload, process.env.TOKEN_SECRET)
    res.json({token: token})

}