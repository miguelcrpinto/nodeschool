//required for second alternative
var bl = require('bl');

var http = require('http');

var argsArray = process.argv;
var url = argsArray[2];

http.get(url, function(response)
{
	//first alternative
	/*var concatedData = '';
	response.setEncoding('utf8');
      response.on('data', function(data){
      		concatedData += data.toString();
      });
      response.on('error', console.error);
      response.on('end', function(){
      	console.log(concatedData.length);
      	console.log(concatedData);
      });
*/
	//second alternative
	//install the bl (Buffer List) or concat-stream
	response.pipe(bl(function(error, data){
		var datastr = data.toString();
		console.log(datastr.length);
      	console.log(datastr);
	}))
});