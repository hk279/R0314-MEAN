var http = require("http")
var fs = require("fs")

http.createServer((request, response)=>{
    var data = fs.readFileSync("sampledata.json")
    var data2 = JSON.parse(data)

    response.writeHead(200, {"Content-Type": "text/html"})
    response.write("<table border='1'>")
        data2.forEach(element => {
            response.write(
                `<tr>
                    <td>` + element.name + `</td>
                    <td>` + element.age + `</td>
                    <td>` + element.company + `</td>
                    <td>` + element.address + `</td>
                </tr>`
            )
        })
    response.write("</table>")
    response.end()
}).listen(8081)

console.log("Server running at http://127.0.0.1:8081")