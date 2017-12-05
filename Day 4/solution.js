xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET", "input", false);
xmlhttp.send();

var content = xmlhttp.responseText;
var lines = content.split("\n");

function compareLine(line) { 
	var seg = line.split(" ");
	for(i = 0; i < seg.length; i++) {
		for(x = i + 1; x < seg.length; x++) {
			if(seg[i] == seg[x]) return false
    	}
    }
	return true
}

total = 0
for(x in lines) {
	if(compareLine(lines[x])) total++;
}

conosle.log(total)