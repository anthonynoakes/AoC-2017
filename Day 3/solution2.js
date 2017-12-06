// we are assuming top left most point in 2d grid is 0, 0. 
// going N is y negative
// going E is x positive
// going S is y positive
// going W is x negative

function makeArray(d1, d2) {
	var arr = new Array(d1), i, l;
	for(i = 0, l = d2; i < l; i++) {
		arr[i] = new Array(d1);
		arr[i].fill(0)
	}
	//arr.fill(0)
	return arr;
}

function printArray(arr)
{
	for (var i = 0; i < arr.length; i++) {
		arrText = ""
		for (var j = 0; j < arr[i].length; j++) {
			arrText+=arr[i][j]+' ';
		}
		console.log(arrText);
	}
}

function sumOfPoint(x, y, size, array)
{
	var sum = 0;
	
	sum+=valueOfPoint(x+1, y, size, array);
	sum+=valueOfPoint(x+1, y+1, size, array)
	sum+=valueOfPoint(x+1, y-1, size, array)

	sum+=valueOfPoint(x-1, y, size, array)
	sum+=valueOfPoint(x-1, y+1, size, array)
	sum+=valueOfPoint(x-1, y-1, size, array)
	
	sum+=valueOfPoint(x, y+1, size, array)
	sum+=valueOfPoint(x, y-1, size, array)
	
	return sum;
}

function valueOfPoint(x, y, size, array)
{
	//console.log(x, y)
	var value = 0;
	
	if(x >= 0 && x < size && y >= 0 && y < size) value = array[x][y]
	
	return value
}

var arrSize = 501
var arr = makeArray(arrSize, arrSize)

var orientation = "E" //N,E,S,W
var xIndex = parseInt(arrSize / 2);
var yIndex = parseInt(arrSize / 2);

// Initliaze array
arr[xIndex][yIndex] = 1;
xIndex++

var lastValue = 1
var target = 277678;
while (lastValue < target)
{
	if(arr[xIndex][yIndex] != 0) console.log("ERROR, cell already written to")
	console.log(lastValue)
	
	// get sum and set to point
	lastValue = sumOfPoint(xIndex, yIndex, arrSize, arr);
	arr[xIndex][yIndex] = lastValue;
	
	// detmine next point
	var xChange = 0;
	var yChange = 0;
	switch (orientation)
	{
		case "N":
			if (arr[xIndex - 1][yIndex] > 0){
				yChange = -1
			} else {
				orientation = "W";
				xChange = -1
			}
			break;
		case "E":
			if (arr[xIndex][yIndex-1] > 0){
				xChange = 1
			} else {
				orientation = "N";
				yChange = -1
			}
			break;
		case "S":
			if (arr[xIndex+1][yIndex] > 0){
				yChange = 1
			} else {
				orientation = "E";
				xChange = 1
			}
			break;
		case "W":
			if (arr[xIndex][yIndex+1] > 0){
				xChange = -1
			} else {
				orientation = "S";
				yChange = 1
			}
			break;
	}
	
	xIndex+=xChange;
	yIndex+=yChange;
}

//301477
console.log("Last: " + lastValue);