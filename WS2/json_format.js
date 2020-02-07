var fs = require("fs")

var data = fs.readFileSync("sampledata.json")
var data2 = JSON.parse(data)

//name, age, company and address
console.log("<table border='1'>")
data2.forEach(element => {
    console.log('<tr>')
    console.log('<td>' + element.name + '</td>')
    console.log('<td>' + element.age + '</td>')
    console.log('<td>' + element.company + '</td>')
    console.log('<td>' + element.address + '</td>')
    console.log('</tr>')
})
console.log('</table>')