const express =require("express")
const app=express()
const port=3500
const path=require("path")

app.use(express.static(path.join(__dirname,'public')))//for css and images
app.use("/",require("./root/index"))
app.use("/sub",require("./root/sub"))

app.listen(port,()=>{console.log("go man go...........3500")})