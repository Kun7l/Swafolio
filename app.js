const express = require('express');

const app = express();

app.use(express.static("public"));

app.get("/",(re,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})


app.listen(3000,()=>{
    console.log("Server up and running on port 3000");
})