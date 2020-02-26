var express = require('express')
var fs = require("fs")
var app = express()

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/demosite/index.html")
})
app.get('/list', function(req, res) {
    res.sendFile(__dirname + "/exampledata.txt")
})
app.get('/jsondata', function(req, res) {
    var data = require(__dirname + "/exampledata2.json")
    res.json(data)
})
app.get('/details', function(req, res) {
    var data = require(__dirname + "/exampledata2.json")
    
    var results = "<table border='1'> "
    data.forEach(element => {
      results += 
      "<tr>" +
      "<td>" + element.Name + "</td>" + 
      "<td>" + element.Email + "</td>" +  
      "</tr>"
    })

    res.send(results)
})
app.get('/add', function(req, res) {
    var data = require('./exampledata2.json')
    data.push({
        Name: "Mika Stenberg",
        Company: "Laurea",
        Email: "mika@laurea.fi",
        Date: "30/3/2016 \r\n"
    })

    var jsonStr = JSON.stringify(data)
    
    fs.writeFile("exampledata2.json", jsonStr, function(err) {
        if(err) throw err
        console.log("It's saved!")
    })

    res.send("Saved the data to a file. Browse to the /details to see the contents of the file.")
})
//404 route
app.get('*', function(req, res) {
    res.send("Can't find the requested page", 404)
})

app.listen(8081, function() {
    console.log("Example app listening on port 8081")
})