require('dotenv').config()
const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("Hii from the home page !!")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on the port ${process.env.PORT}`);
})