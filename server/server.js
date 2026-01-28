const express = require('express')
const  dbConnect  = require('./config/dbConnect')
const app = express()
app.use(express.json())
dbConnect()
app.listen(4000,()=>{
    console.log("THE APP IS RUNNING")
})
app.get('/',(req,res)=>{
    res.send("<h1>THE APP IS RUNNING</h1>")
})