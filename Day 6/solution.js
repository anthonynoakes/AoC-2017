xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET", "6/input", false);
xmlhttp.send();

var content = xmlhttp.responseText;
var lines = content.split("\n");

var gblocks = lines[0].split("\t").map(Number);//conver line to number
//var blocks = "2	4	1	2".split("\t").map(Number);//conver line to number

// Returns count of existing hash
function checkExistsBankAndUpdate(bank, hashtable)
{
	// blocks to value
	blocksStr = bank.join(';');
	
	var count = hashtable[blocksStr]
	if(!hashtable[blocksStr]) count = 0;
	
	count++;
	hashtable[blocksStr] = count;
	
	return count;
}

function getCyclesForLoops(loops, blocks)
{
	var hashtable = {};
	var cycles = 0;

	while (checkExistsBankAndUpdate(blocks, hashtable) >= loops)
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
	
	return cycles;
}

console.log("problem 1 cycles: " + getCyclesForLoops(1, gblocks.slice()));
console.log("problem 2 cycles: " + (getCyclesForLoops(2, gblocks.slice()) - getCyclesForLoops(1, gblocks.slice())));