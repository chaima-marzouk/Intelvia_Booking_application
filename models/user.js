const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('../config/mongoose');

const userSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});


const User = mongoose.model('user', userSchema);
module.exports = User;