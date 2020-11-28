const express=require("express");
const router=express.Router();

router.get("/cats",function(req,res){
    res.send("Cats here!");
});

module.exports=router;