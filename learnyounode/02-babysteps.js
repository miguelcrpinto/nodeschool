

var argsArray = process.argv;
var sum = 0;
for(var i = 2; i < argsArray.length; i++)
{
	sum += Number(argsArray[i]);
}
console.log(sum);