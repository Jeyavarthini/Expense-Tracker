const express=require('express')
const cors=require('cors')
const app=express()
require('dotenv').config()

const PORT =process.env.PORT
app.use(express.json())
app.use(cors())
const database=require('./db.js')
const server=()=>{
    database.db()
    app.listen(PORT,()=>{
        console.log('listening to port:',PORT)
    })
}
server()
