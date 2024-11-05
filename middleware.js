const express=require('express')
const app=express()
const path=require('path')
const port=process.env.PORT || 3500

const cors = require('cors');

//custom middleware

app.use((req,res,next)=>{
  console.log(`${req.method} ${req.path}`) //print request path
  next()
})

//regular expression ^ $ | ?

//build-in middleware
app.use(express.urlencoded({extended:false})) //urlencoded - form data
app.use(express.json()) //json file
console.log(path.join(__dirname,'public'))
app.use(express.static(path.join(__dirname,'public')))

const whitelist=["https://www.google.com","https://localhost:3500","https://localhost:5500"]
const corsoption={
  origin:(origin,callback)=>{
    if(whitelist.indexOf(origin)!==-1 || !origin){
      callback(null,true)
    }
    else{
      callback(new Error("not allower by corrs"))
    }
  }
}

app.use(cors(corsoption))



app.get('^/$|/index(.html)?',(req,res)=>{
    console.log("how are you")
  res.send("hai boys")
})
app.get("/htmlfile",(req,res)=>{
res.sendFile(path.join(__dirname,"views",'index.html'))
})
app.get("/html",(req,res)=>{
res.redirect(301,'htmlfile')
})



//Multiple functions

const one=(req,res,next)=>{
  console.log("just print")
  next()
}
const two=(req,res,next)=>{
  console.log("just print")
  next()
}
const three=(req,res)=>{
  console.log("just print")
  res.send("just print")
}

app.get("/cont",[one,two,three])

//this content only last
app.get("/*",(req,res)=>{
  res.sendFile(path.join(__dirname,"views","404.html"))
})

app.listen(port,()=>{console.log(`File success fully running ${port}`)})