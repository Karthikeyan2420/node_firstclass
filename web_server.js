const express=require('express')
const app=express()
const path=require('path')
const port=process.env.PORT || 3500

//app.use('/subdir',require('./routing'))

//regular expression ^ $ | ?
/* app.get('^/$|/index(.html)?',(req,res)=>{
    console.log("how are you")
  res.send("hai boys")
}) */
app.get("/htmlfile",(req,res)=>{
res.sendFile(path.join(__dirname,"views",'index.html'))
/* res.send("something") */
})
/* app.get("/html",(req,res)=>{
res.redirect(301,'htmlfile')
}) */



//Multiple functions

/* const one=(req,res,next)=>{
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

app.get("/cont",[one,two,three]) */

//this content only last
//this method handling only get undefine path
/* app.get("/*",(req,res)=>{
  res.sendFile(path.join(__dirname,"views","404.html"))
}) */

//this is used to all get,post,delete..
/* app.all('*',(req,res)=>{
  res.status(404)
  if(req.accepts('html')){
    res.sendFile(path.join(__dirname,"views","404.html"))
  }
  else if(req.accepts('json')){
    res.json({"error":"404 not found"})
  }
  else{
    res.type('txt').send("404 Not Found")
  }
}) */

app.listen(port,()=>{console.log(`File success fully running ${port}`)})