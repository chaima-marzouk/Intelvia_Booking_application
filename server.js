const express = require('express');
const app = express();

app.get('/test', (req,res) => {
    res.send("hello mf :)")
})

app.listen(3000, () => console.log("listen on port 3000"))