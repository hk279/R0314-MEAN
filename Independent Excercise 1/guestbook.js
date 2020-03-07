var express = require("express");
var fs = require("fs");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/guestbook", function(req, res) {
    var data = require(__dirname + "/data.json");
    var results = "<table border='1'> ";

    data.forEach(element => {
        results +=
            "<tr>" +
            "<td>" +
            element.id +
            "</td>" +
            "<td>" +
            element.username +
            "</td>" +
            "<td>" +
            element.country +
            "</td>" +
            "<td>" +
            element.date +
            "</td>" +
            "<td>" +
            element.message +
            "</td>" +
            "</tr>";
    });
    res.sendFile(__dirname + "/guestbook.html");
    res.send(results);
});
app.get("/newmessage", function(req, res) {
    res.sendFile(__dirname + "/newmessage.html");
});
app.post("/newmessage", function(req, res) {
    var data = require("./data.json");
    data.push({
        id: data.length + 1,
        username: req.body.username,
        country: req.body.country,
        date: new Date(),
        message: req.body.message
    });

    var jsonStr = JSON.stringify(data);

    fs.writeFile("data.json", jsonStr, function(err) {
        if (err) throw err;
        console.log("It's saved!");
    });

    res.send("Entry is saved. Browse to the /guestbook to see all entries.");
});
app.get("/ajaxmessage", function(req, res) {
    res.sendFile(__dirname + "/ajaxmessage.html");
});
app.post("/ajaxmessage", function(req, res) {
    var data = require("./data.json");
    data.push({
        id: data.length + 1,
        username: req.body.username,
        country: req.body.country,
        date: new Date(),
        message: req.body.message
    });

    var jsonStr = JSON.stringify(data);

    fs.writeFile("data.json", jsonStr, function(err) {
        if (err) throw err;
        console.log("It's saved!");
    });

    res.send("Entry is saved. Browse to the /guestbook to see all entries.");
});

//404 route
app.get("*", function(req, res) {
    res.send("Can't find the requested page", 404);
});

app.listen(8081, function() {
    console.log("Example app listening on port 8081");
});
