var express = require("express");
var app = express();

const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.render("pages/index");
});
app.get("/guestbook", function(req, res) {
    var data = require(__dirname + "/data.json");
    res.render("pages/guestbook", { messages: data });
});
app.get("/newmessage", function(req, res) {
    var data = require("./data.json");
    res.render("pages/newmessage", { messages: data });
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

    var jsonStr = JSON.stringify(data, null, 4);

    fs.writeFile("data.json", jsonStr, function(err) {
        if (err) throw err;
        console.log("It's saved!");
    });

    res.render("pages/newmessage", { messages: data });
});
app.get("/ajaxmessage", function(req, res) {
    var data = require("./data.json");
    res.render("pages/ajaxmessage", { messages: data });
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

    var jsonStr = JSON.stringify(data, null, 4);

    fs.writeFile("data.json", jsonStr, function(err) {
        if (err) throw err;
        console.log("It's saved!");
    });

    res.render("partials/table", { messages: data });

    /* var table = `
    <table class="table">
        <thead>
            <tr>
                <th>Username</th>
                <th>Country</th>
                <th>Message</th>
            </tr>
        </thead>
    <tbody>
    `;
    data.forEach(element => {
        table += `
        <tr>
            <td>${element.username}</td>
            <td>${element.country}</td>
            <td>${element.message}</td>
        </tr>`;
    });
    table += `
        </tbody>
    </table>
    `;
    res.send(table); */
});

//404 route
app.get("*", function(req, res) {
    res.send("Can't find the requested page", 404);
});

app.listen(PORT, function() {
    console.log("App listening on port 5000");
});
