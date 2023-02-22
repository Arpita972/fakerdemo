const express=require('express')
const morgan=require('morgan')
const app=express()


const port = process.env.port || 3000;
const { nameRouter } = require("./handlers/name.js");
const { randomRouter } = require("./handlers/random.js");


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//router
app.use('/api/name',nameRouter)
app.use("/api/random", randomRouter);



app.listen(port,()=>{
console.log('server started');
})
