
var filterfiles = function(folderPath, extensionToFilter, callback)
{
	var fs = require('fs');
	var path = require('path');
	var filesArray = [];
	fs.readdir(folderPath, function(error, list){
		if(error)
		{
			return callback(error, filesArray);
		}
		
		for(i = 0; i < list.length; i++)
		{
			var filename = list[i];
			if(path.extname(filename) === '.' + extensionToFilter)
			{
				filesArray.push(filename);
			}
		}	
		
		return callback(null, filesArray);
		
	})	
};

module.exports = filterfiles;
