var fs = require('fs');
var greeting = require('./hello_world');

greeting.hello();
greeting.customHello('mars');

// fs.readFile('my_file.txt', function(err, content) {
//   console.log(content)
// });

// console.log('I am doing something else');