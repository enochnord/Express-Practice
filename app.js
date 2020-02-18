var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink" ,
        cow: "Moo" ,
        dog: "woof" ,
        cat: "meow"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:words/:numoftimes", function(req, res){
    var num = req.params.numoftimes;
    var word = req.params.words;
    var result = ""
    parseInt(num);
    for(i = 0; i < num; i++){  
        result += word + " ";
    }
    res.send(result);
});

// start server
app.listen(3000, process.env.IP, function(){
    console.log("Server has started!!!")
});