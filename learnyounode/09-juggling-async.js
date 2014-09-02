var http = require('http');
var concatstream = require('concat-stream');
var argsArray = process.argv;

var results = ['','',''];
var counter = 0;
for(var i = 2; i <= 4; i++)
{
	getContent(i);
}

function getContent(index)
{
	var url = argsArray[index];
	http.get(url, function(response)
	{
		response.pipe(concatstream(function (data) 
		{

			results[index - 2] = data.toString();
			counter++;
			if(counter == 3)
			{
				results.forEach(function(result){
					console.log(result);
				});
			}
		}));
	});
};