xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET", "5/input", false);
xmlhttp.send();

var content = xmlhttp.responseText;
var lines = content.split("\n");

var steps = 0;
var length = lines.length - 1;

function hasExited(index, length)
{
	return index < 0 || index >= length;
}

var index = 0;
while(!hasExited(index, length))
{
	// get move, convert to number
	var move = +lines[index];
	
	// update jump value
	//	if the offset was 3+, instead decrease it by 1
	//	otherwize increase by 1
	if(move >= 3) lines[index]-=1
	else lines[index]++
	
	index+=move;
	
	steps++;
}

console.log("steps: " + steps);