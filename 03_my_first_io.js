var fs = require('fs');

var fileName = process.argv[2];

var file = fs.readFileSync(fileName);

var contents = file.toString();

console.log(contents.split('\n').length - 1);

// var contents = fs.readFileSync(process.argv[2]);

// var lines = contents.toString().split('\n').length - 1;

// console.log(lines);
