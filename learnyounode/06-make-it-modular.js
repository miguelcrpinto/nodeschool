var ff = require('./filterfiles');
var argsArray = process.argv;
var folderPath = argsArray[2];
var extensionToFilter = argsArray[3];
ff(folderPath, extensionToFilter, function(error, data)
{
	if(error)
	{
		console.log(error);	
	}
	else
	{
		data.forEach(function(file)
		{
			console.log(file);
		});
	}
	
});