const express = require('express');
const app = express();
require('./config/mongoose');
require('dotenv/config');
const {router} = require('./routes/user')






app.use('/api/users',router)

app.listen(3000, () => console.log("listen on port 3000"))