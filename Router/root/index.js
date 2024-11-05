const express=require("express")
const router=express.Router()
const port = 3500
const path=require("path")

router.get("^/$|/index(.html)",(req,res)=>{
    res.send("Yeshh this is index page , it didn't call htm ")
})

router.get("/page",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","index","index.html"))
})

module.exports=router