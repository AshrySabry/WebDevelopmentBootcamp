var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema =new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String,
});

var Cat = mongoose.model("Cat",catSchema);

//adding a new cat to the DB

// var george = new Cat({
//     name:"Ms. Norris",
//     age:20,
//     temperament:"Thai"
// });

// george.save(function(err,cat){
//     if(err){
//         console.log("Something went wrong")
//     }
//     else{
//         console.log("We just saved a cat to the db");
//         console.log(cat);
//     }
// });

// retrieve all cats from the DB and console.log each one

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err,cats){
    if(err){
        console.log(err);
    }   else {
        console.log(cats);
    }
});

Cat.find({},function(err,cats){
    if(err){
        console.log("Oh No, Error");
        console.log(err);
    }   else {
        console.log("Succeed")
        console.log(cats);
    }
})