const input = require('./input');
const { getNumberOfTrees } = require('./puzzle1');

const minimize = (tree, steps = [], inputData = '') => {
  return steps.map(([x, y]) => getNumberOfTrees(x, y, tree, inputData)).reduce((first, second) => first * second);
};

console.log(
  minimize(
    '#',
    [
      [3, 1],
      [1, 1],
      [5, 1],
      [7, 1],
      [1, 2],
    ],
    input,
  ),
);
