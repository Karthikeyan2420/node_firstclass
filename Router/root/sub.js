const express =require('express')
const router=express.Router()
const port=3500
const path=require("path")
router.get("/",(req,res)=>{
    res.send("This is new Message from sub folder")
})

router.get("/page",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","sub","index.html"))
})

module.exports=router