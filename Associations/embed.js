var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post",postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "kobe@nba.com",
//     name: "Kobe Bryant"
// });

// newUser.posts.push({
//     title: "How to brew polyjice",
//     content: "JKskfds;sv"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title:"Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name:"Kobe Bryant"}, function(err,user){
    if(err){
        console.log(err);
    } else{
        user.posts.push({
            title: "how to kill",
            content: "Kill"
        });
        user.save(function(err,user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});