var argsArray = process.argv;
var fs = require('fs');
fs.readFile(argsArray[2], function(error, buf){
	if(error !== 'null')
	{
			var str = buf.toString();
		console.log(str.split('\n').length - 1)

	}
});
