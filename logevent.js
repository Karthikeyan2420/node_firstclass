/* const express=require('express')
const app = express()
const path = require('path');
const logEvents=require('./nodelog')
const port = process.env.PORT || 3500

app.use((req,res,next)=>{
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`)
    console.log(`${req.method} ${req.path}`) //print request path
    next()
  })
  app.get("/htmlfile",(req,res)=>{
    res.sendFile(path.join(__dirname,"views",'index.html'))
    })  



app.listen(port,()=>{console.log(`${port} visit that port to view output`)}) */



const express=require('express')
const app = express()
const path = require('path');
const {logger}=require('./nodelog')
const port = process.env.PORT || 3500
const errorhandling=require('./error')
const cors=require('cors') 
//app.use(cors()) //third party middleware - it give access to all the website


//use this condition to control what are the website all the access
const whitelist=['https://www.google.com','http://localhost:3500','http://127.0.0.1:5500']
const corsoption={
    origin:(origin,callback)=>{
        if(whitelist.indexOf(origin)!==-1 || !origin){
            callback(null,true)
        }
        else{callback(new Error('Not allwed by CORS'))}
    }
}
app.use(cors(corsoption))

app.use(logger) //simply that above concept
  app.get("/htmlfile",(req,res)=>{
    res.sendFile(path.join(__dirname,"views",'index.html'))
    })  

app.use(errorhandling)

app.listen(port,()=>{console.log(`${port} visit that port to view output`)})



//go to google.com open console fetch("http://localhost:3500/htmlfile")
//that only reason use cors