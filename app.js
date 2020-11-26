const express=require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/home.html")
});

app.get("/dogs",function(req,res){
    res.send("Dogs are here!");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  