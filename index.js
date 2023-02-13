const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/hero1", function(req, res){
    res.sendFile(__dirname+"/hero1.html");
});

app.get("/hero2", function(req, res){
    res.sendFile(__dirname+"/hero2.html");
});

app.get("/hero3", function(req, res){
    res.sendFile(__dirname+"/hero3.html");
});

app.get("/hero4", function(req, res){
    res.sendFile(__dirname+"/hero4.html");
});


app.listen(3000, function(){
    console.log("Server running at port 3000");
});