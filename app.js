const express = require("express");
const app = express();
const faker = require('faker');
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


//routes
app.get("/", function(req, res){
    res.render("index.html", {randomLastName:faker.name.lastName()});
});

app.get("/inheritance", function(req, res){
    res.render("inheritance.html", {randomLastName:faker.name.lastName()});
});

app.get("/object", function(req, res){
    res.render("object.html", {randomLastName:faker.name.lastName()});
});

app.get("/class", function(req, res){
    res.render("class.html", {randomLastName:faker.name.lastName()});
});

app.get("/home", function(req, res){
    res.render("index.html", {randomLastName:faker.name.lastName()});
});

//server listener
app.listen(process.env.PORT, function(){
    console.log("Express Server is running...");
});
