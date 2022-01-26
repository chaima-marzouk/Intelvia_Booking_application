const Joi = require('@hapi/joi');
const registerValidation = (data) =>{
    const Schema = {
        username : Joi.string()
                .required()
                .min(3),
        email : Joi.string()
                .required()
                .min(5),
        password : Joi.string()
                .required()
                .min(3)
    };
    return Joi.validate(data, Schema);
};

module.exports = {
    registerValidation
}