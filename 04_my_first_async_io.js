var fs = require('fs');

// var fileName = process.argv[2];

// var file = fs.readFile(fileName, function(err, data){
//   console.log(data.toString().split('\n').length - 1);
// });

var file = process.argv[2];

fs.readFile(file, function(err, data){
  var lines = (data.toString().split('\n').length - 1);
  console.log(lines);
});