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
	// get move
	var move = +lines[index];
	
	// increase offset of last instruction
	lines[index]++;
	
	index+=move;
	
	steps++;
}

console.log("steps: " + steps);