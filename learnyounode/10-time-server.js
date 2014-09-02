var net = require('net');
var server = net.createServer(function (socket) {
	var date = new Date();
	var year = date.getFullYear();
	var month = twoDigitFormat(date.getMonth()+1);
	var day = twoDigitFormat(date.getDate());
	var hours = twoDigitFormat(date.getHours());
	var minutes = twoDigitFormat(date.getMinutes());
  socket.end(year+'-'+ month +'-'+ day + ' ' + hours + ':' + minutes + '\n');
});
server.listen(process.argv[2]);


function twoDigitFormat(value)
{
	if(value.toString().length == 1)
	{
		value = '0' + value;
	}
	return value;
}