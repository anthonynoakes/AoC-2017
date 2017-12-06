xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET", "4/input", false);
xmlhttp.send();

var content = xmlhttp.responseText;
var lines = content.split("\n");

function cmp(x,y) {
    return x > y ? 1 : (x < y ? -1 : 0);
}

function compareLine(line) { 
	var seg = line.split(" ");
	
	var sorted = new Array(seg.length)
	for(x in seg) {
		f = seg[x].split('')
		f = f.sort(cmp)
		sorted[x] = f.join('');
	};
	
	for(i = 0; i < sorted.length; i++) {
		for(x = i + 1; x < sorted.length; x++) {
			if(sorted[i] == sorted[x]) return false;
    	}
    }
	return true
}

total = 0
for(x in lines) {
	if(compareLine(lines[x])) { total++; }
}

console.log(total)