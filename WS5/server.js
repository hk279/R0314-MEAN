var express = require("express");
var app = express();

app.set("view engine", "ejs");

var data = {
    users: [
        { name: "John", age: 25 },
        { name: "Mike", age: 42 },
        { name: "Samantha", age: 51 }
    ]
};

app.get("/", function(req, res) {
    res.render("pages/index", {
        new_heading: "This was passed form the JS file...",
        new_content: "Lorem ipsum...",
        new_footer: "Here is the new footer"
    });
});
app.get("/users", function(req, res) {
    res.render("pages/users", data);
});
app.get("/about", function(req, res) {
    res.render("pages/about");
});

app.listen(8081);
console.log("Running on port 8081");
