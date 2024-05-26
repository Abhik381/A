const express = require("express")
require("dotenv").config()
const app = express()

const port = process.env.PORT || 8000

app.get("/", (req,res)=>{
    res.status(200).json({
        message: "Welcome to my webpage",
        date: Date.now()
    })
})

app.listen(port, ()=>{
    console.log("Server started at port no: ",port)
})