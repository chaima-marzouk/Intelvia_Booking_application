const mongoose = require('mongoose');

//database  connection 
mongoose.connect(
    'mongodb://localhost/intelvia_booking',
    () => console.log('database connected successfuly'),
    (e) => console.log(e.message)
);
module.exports = mongoose ; 