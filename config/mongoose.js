const mongoose = require('mongoose');

//database  connection 
mongoose.connect(
    'mongodb://localhost:27017/intelvia_booking',
    () => console.log('database connected successfuly'),
    (e) => console.log(e.message)
);
module.exports = mongoose ; 