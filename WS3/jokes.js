var http = require("http")
const axios = require('axios')
var json
 
const promise = axios
  .get("https://sv443.net/jokeapi/v2/joke/dark")
  .then(function (response) {
    const data = response.data
    console.log(data)
    json = data
  })
  .catch(function (error) {
    console.log(error)
  })
  console.log(promise)

http.createServer((request, response)=>{
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write(
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <title>Jokes</title>
            <meta charset="utf-8"/>
        </head>
        <body>
            <h1>Random dark joke of the day:</h1>
            <p>` + json.setup + `</p>
            <p>` + json.delivery + `</p>
        </body>
    </html>`
  )
  response.end()
}).listen(8081)

console.log("Server running at http://127.0.0.1:8081")