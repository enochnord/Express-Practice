var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" => "WOOF!"
app.get("/dog", function(req, res){
    res.send("WOOF!");
});

// working with parameters
app.get("/test/:topic/:id", function(req, res){
    var topics = req.params.topic;
    res.send("Welcome to the " + topics.toUpperCase() + " topic!");
});

app.get("*", function(req, res){
    console.log("You are a star!")
    res.send("You are a star!");
});

// Tell Express to listen for requests (start server)
app.listen(3000, process.env.IP, function(){
    console.log("Server has started!!!")
});