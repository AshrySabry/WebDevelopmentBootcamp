var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

var campgrounds = [
    {name:"Salmon Creek", image: "https://images.unsplash.com/photo-1586350150312-bc4eb01d4990?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1358&q=80"},
    // {name:"Grainte Hill", image: "https://unsplash.com/photos/jG094uSo6u0"},
    // {name:"Mountain Goats rest", image: "https://unsplash.com/photos/jG094uSo6u0"},
]


app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds:campgrounds});
})

app.post("/campgrounds", function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image:image}
    campgrounds.push(newCampground);
    //get data from form and add to campgrounds array
    //redirect to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs");
});

app.listen(3000,function(){
    console.log("The YelpCamp server has started!");
});