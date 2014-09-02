var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
	console.log(req.url);
var urlInfo = url.parse(req.url, true);
	res.writeHead(200, { 'Content-Type': 'application/json' })
 switch(urlInfo.pathname)
 {
 	case '/api/parsetime':
 		res.end(parsetime(urlInfo.query.iso));
 	break;
 	case '/api/unixtime':
 		res.end(getUnixTime(urlInfo.query.iso));
 	break;
 	default:
 		res.end('route not found');
 }
  
});
server.listen(process.argv[2])

function parsetime(time)
{
	var date = new Date(time);
	var jsonTime = {
		"hour" : date.getHours(),
		"minute" : date.getMinutes(),
		"second" : date.getSeconds()
	};
	return JSON.stringify(jsonTime);
}
function getUnixTime(time)
{
	var date = new Date(time);
	var jsonTime = {
		"unixtime" : date.getTime()
	};
	return JSON.stringify(jsonTime);
}