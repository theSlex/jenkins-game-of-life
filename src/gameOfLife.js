var printToScreen = function(cells) {
	var output = '';
	var maxCellsInRow = 6;
	var cellsInRow = 0;
	
	cells.forEach( function (cell) {
		if (cell[2] == false) {
			output += "A";
		} else {
			output += "D";
		}
		
		cellsInRow++;
		
		if (cellsInRow == maxCellsInRow) {
			console.log(output);
			cellsInRow = 0;
			output = '';
		}
	})
}

var determineKill = function(numAliveNeighbors, kill) {
	if (numAliveNeighbors != 2 && numAliveNeighbors != 3) {
		kill.push(1);
	}
return kill;
}
	
var determineResurrection = function(numAliveNeighbors, alive) {
	if (numAliveNeighbors == 3) {
		alive.push(1);
	}
return alive;
}

	
var findAliveNeighbors = function(cells, currentCell) {
	var aliveNeighbors = 0;
	var currentX = cells[currentCell][0];
	var currentY = cells[currentCell][1];
	//check cell to the left
	var leftX = cells[currentCell-1][0];
	var leftY = cells[currentCell-1][1];
	console.log("left Cell:" + cells[currentCell-1])
	//same row AND is alive
	if(leftX == currentX && cells[currentCell-1][2])
	{
		aliveNeighbors ++;
	}
	
	//check cell to the right
	var rightX = cells[currentCell+1][0];
	var rightY = cells[currentCell+1][1];
	console.log("left Cell:" + cells[currentCell+1])
	//same row AND is alive
	if(rightX == currentX && cells[currentCell+1][2])
	{
		aliveNeighbors ++;
	}
	
	
return aliveNeighbors;
}

var cells = [
  [1, 1, false],
  [1 ,2, true],
  [1, 3, false],
  [1 ,4, true],
  [1 ,5, false],
  [1 ,6, false],
  [2 ,1, false],
  [2 ,2, true],
  [2, 3, false],
  [2 ,4, false],
  [2 ,5, false],
  [2 ,6, false]
];

printToScreen(cells);

exports.determineKill = determineKill;
exports.determineResurrection = determineResurrection;
exports.printToScreen = printToScreen;
exports.findAliveNeighbors = findAliveNeighbors;