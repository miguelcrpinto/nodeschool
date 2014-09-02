var argsArray = process.argv;
var fs = require('fs');
var buf = fs.readFileSync(argsArray[2]);
var str = buf.toString();
console.log(str.split('\n').length - 1)