var http = require("http")
http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type": "text/html"})
    if (request.url === "/"){
        response.write(
            `<h1>This is a homepage</h1>
            <a href="/helloworld">Go to Hello World</a>
            <a href="/about">Go to About page</a>`)
    } else if (request.url === "/helloworld"){
        response.write(
            `<h1>Hello world</h1>
            <a href="/">Go to Homepage</a>
            <a href="/about">Go to About page</a>`
        )
    } else if (request.url === "/about"){
        response.write(
            `<h1>This is an About page</h1>
            <a href="/helloworld">Go to Hello World</a>
            <a href="/">Go to Homepage</a>`)
    }
    response.end()
}).listen(8081)

console.log("Server running at http://127.0.0.1:8081")