var http = require("http")
const axios = require('axios')
var json
 
const promise = axios
  .get("http://www.omdbapi.com/?s=star+wars&apikey=62c5fe4a")
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
            <title>Movie search</title>
            <meta charset="utf-8"/>
        </head>
        <body>
            <table style="border: 2px solid black;">
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>Year</td>
                        <td>Genre</td>
                    </tr>
                    <tr>
                        <td>` + json.Title + `</td>
                        <td>` + json.Year + `</td>
                        <td>` + json.Genre + `</td>
                    </tr>
                </tbody>
            </table>
        </body>
    </html>`
  )
  response.end()
}).listen(8081)

console.log("Server running at http://127.0.0.1:8081")