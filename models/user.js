const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('../config/mongoose');

const userSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        min: 5
    },
    password: {
        type: String,
        required: true,
        min: 3
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});


const User = mongoose.model('user', userSchema);
module.exports = User;