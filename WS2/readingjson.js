var fs = require("fs")
var http = require("http")

var jsondata = fs.readFileSync("sampledata.json")
var array = JSON.parse(jsondata)
var newJsonObject = {
    name: "John Doe",
    age: "52",
    company: "Laurea",
    address: "Ratatie 22"
}

//Push a new element
array.push(newJsonObject)
console.log(array.length)

//Remove the first element
array.splice(0,1)
console.log(array.length)

//Save modified JSON to a new file
fs.writeFileSync("dataset.json", JSON.stringify(array))

//Output the modified JSON file to the web browser as plain text
http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type": "text/json"})
    response.write(JSON.stringify(array))
    response.end()
}).listen(8081)

console.log("Server running at http://127.0.0.1:8081")
