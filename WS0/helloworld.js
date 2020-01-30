var http = require("http")
http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Hello world</title>
                <meta charset="utf-8"/>
            </head>
            <body>
                <table style="color: red">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Address</td>
                            <td>City</td>
                        </tr>
                        <tr>
                            <td>Matti Meikäläinen</td>
                            <td>Timotie 1, as 10</td>
                            <td>Tampere</td>
                        </tr>
                        <tr>
                            <td>Maija Virtanen</td>
                            <td>Asematie 12</td>
                            <td>Kiljava</td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>`
    )
    response.end("Hello World\n")
}).listen(8081)

console.log("Server running at http://127.0.0.1:8081")