const express=require("express");
const router=express.Router();

router.get("/dogs",function(req,res){
    res.send("Dogs here!");
});

module.exports=router;