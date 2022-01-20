const bodyParser = require('body-parser')
const express = require('express');
// const mongoose = require('mongoose')
const router = require('./routes/user')
const app = express();
const hostname = "localhost";
require('./config/mongoose');

const PORT = process.PORT || 8000;
require('dotenv/config');

app.use(express.json())  
app.use('/api/users',router)




app.listen(PORT, () => console.log(`Server running at http://${hostname}:${PORT}/`))