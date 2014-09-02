var http = require('http');
var argsArray = process.argv;
var url = argsArray[2];

http.get(url, function(response)
{
	response.setEncoding('utf8');
      response.on('data', console.log);
      response.on('error', console.error);
});