var http = require("http")
var fs = require("fs")

http.createServer((request, response)=>{
    if (request.url === "/"){
        response.writeHead(200, {"Content-Type": "text/plain"})
        response.write('Nothing here to see')
    } else if (request.url === "/frontpage"){
        response.writeHead(200, {"Content-Type": "text/html"})
        var data = fs.readFileSync("frontpage.html")
        response.write(data.toString())
    } else if (request.url === "/contact"){
        response.writeHead(200, {"Content-Type": "text/html"})
        var data = fs.readFileSync("contact.html")
        response.write(data.toString())
    } else if (request.url === "/plaintext"){
        response.writeHead(200, {"Content-Type": "text/plain"})
        var data = fs.readFileSync("plaintext.txt")
        response.write(data.toString())
    } else if (request.url === "/json"){
        response.writeHead(200, {"Content-Type": "application/json"})
        var data = fs.readFileSync("sampledata.json")
        response.write(data.toString())
    }
    response.end()
}).listen(8081)

console.log("Server running at http://127.0.0.1:8081")