var fs = require("fs")

//Writes contents of the first example to a new file
var data = fs.readFileSync("example.txt")
fs.writeFileSync("combined.txt", data.toString())

//Appends the file with the contents of the second example
var data2 = fs.readFileSync("example2.txt")
fs.appendFileSync("combined.txt", "\n" + data2.toString())

//Appends the file with text
fs.appendFileSync("combined.txt", "\nI wrote this!")

//read existing contents into data
var data = fs.readFileSync("combined.txt")
var fd = fs.openSync("combined.txt", 'w+')
var buffer = new Buffer.from('I wrote this!\n')

//Write new data
fs.writeSync(fd, buffer, 0, buffer.length, 0)
//Append old data
fs.writeSync(fd, data, 0, data.length, buffer.length)

//Print the contents to console
var data3 = fs.readFileSync("combined.txt")
console.log(data3.toString())