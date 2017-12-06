xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET", "6/input", false);
xmlhttp.send();

var content = xmlhttp.responseText;
var lines = content.split("\n");

var blocks = lines[0].split("\t").map(Number);//conver line to number

var hashtable = {};
var cycles = 0;

// Returns count of existing hash
function checkExistsBankAndUpdate(bank)
{
	// blocks to value
	blocksStr = bank.join(';');
	
	var count = hashtable[blocksStr]
	if(!hashtable[blocksStr]) count = 0;
	
	count++;
	hashtable[blocksStr] = count;
	
	return count;
}

while (checkExistsBankAndUpdate(blocks) <= 1)
{
	// get largest block index
	var largestIndex = 0; var blockVal = 0;
	for(var i = 0; i < blocks.length; i++)
	{
		if(blocks[i] > blockVal)
		{
			largestIndex = i;
			blockVal = blocks[i]
		}
	}

	blocks[largestIndex] = 0;// reset largest
	
	var index = largestIndex + 1; // get starting index of adding blocks
	for(var i = blockVal; i > 0; i--) // iterate and add to blocks 
	{
		blocks[index % blocks.length]++;
		index++
	}

	// add completed cycle
	cycles++;
}

console.log("cycles: " + cycles);