const express = require('express');





const app = express();
const port = 8080 || process.env.PORT;

app.get('/test', (req,res) =>{
    res.json( "hello world!");
})

app.listen(port, () => {
    console.log("server is running");
})