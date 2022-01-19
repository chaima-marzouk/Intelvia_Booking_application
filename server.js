const bodyparser = require('body-parser')
const express = require('express');
const app = express();
const hostname = "localhost"
const PORT = process.PORT || 8000;
require('./config/mongoose');
require('dotenv/config');
const {router} = require('./routes/user')






app.use(bodyparser.json())
app.use('/api/users',router)

app.listen(PORT, () => console.log(`Server running at http://${hostname}:${PORT}/`))