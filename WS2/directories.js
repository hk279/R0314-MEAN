var fs = require("fs")

fs.mkdirSync('/Users/jerej/Desktop/R0314-MEAN/WS2/asd')

var data = fs.readdirSync("/Users/jerej/Desktop/R0314-MEAN/WS2")
console.log(data)

fs.rmdirSync("/Users/jerej/Desktop/R0314-MEAN/WS2/exampledir")
var data2 = fs.readdirSync("/Users/jerej/Desktop/R0314-MEAN/WS2")
console.log(data2)