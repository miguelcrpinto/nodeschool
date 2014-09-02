var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {

  var stream = fs.createReadStream(process.argv[3]);
  res.writeHead(200, {
		//'Content-Length' : stream.length,
		'Content-Type' : 'text/plain'
	});
  stream.pipe(res);
});
server.listen(process.argv[2])