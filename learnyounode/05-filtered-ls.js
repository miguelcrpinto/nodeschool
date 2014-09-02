var fs = require('fs');
var path = require('path');
var argsArray = process.argv;
var folderPath = argsArray[2];
var extensionToFilter = '.' + argsArray[3];
fs.readdir(folderPath, function(error, list){
	for(i = 0; i < list.length; i++)
	{
		var filename = list[i];
		if(path.extname(filename) === extensionToFilter)
		{
			console.log(filename);
		}
	}
})