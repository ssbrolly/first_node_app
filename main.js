var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request',  function(req, res) {
  fs.readFile('index.html', function(err, content){
    if (err) {
      res.writeHead(500, 'text/plain');
      //logger.emit('error', err);
      response.end(err);
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(content) 
    }
  }) 
}).listen(8080);

console.log("Server running at http://localhost:8080")