
var fs = require('fs')

var dir = process.argv[2]
var ext = process.argv[3]
var extFilter = new RegExp('\\.' + ext + '$');

fs.readdir(dir, function (err, list) {
  list.forEach(function (item){
    if (extFilter.test(item)) {
      console.log(item)
    }
  })
})

// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//  list.forEach(function (file) {
//    if (path.extname(file) === '.' + process.argv[3])
//      console.log(file)
//  })
// })