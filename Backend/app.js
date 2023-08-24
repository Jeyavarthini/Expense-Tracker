const express=require('express')
const cors=require('cors')
const { db } = require('./db/db')
const {readdirSync}=require('fs')
const app=express()
require('dotenv').config()

const PORT =process.env.PORT
app.use(express.json())
app.use(cors())

readdirSync('./route').map((routes)=> app.use('/api/v1',require('./route/'+routes)))
const server=()=>{
    app.listen(PORT,()=>{
        db()
        console.log('listening to port:',PORT)
    })
}
server()
