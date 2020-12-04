const input = require('./input');

String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

const getNumberOfTrees = (xStep, yStep, tree, inputData = '') => {
  const lines = inputData.split('\n').filter((line) => line.length > 0);

  let numberOfTrees = 0;
  let xPosition = xStep;
  let yPosition = yStep;

  while (yPosition < lines.length) {
    const currentXPos = xPosition % lines[0].length;
    let line = lines[yPosition];
    if (tree === lines[yPosition][currentXPos]) {
      numberOfTrees++;
      line = line.replaceAt(currentXPos, 'X');
    } else line = line.replaceAt(currentXPos, 'O');
    console.log(line);
    xPosition += xStep;
    yPosition += yStep;
  }

  return numberOfTrees;
};
console.log(getNumberOfTrees(3, 1, '#', input));
