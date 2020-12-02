const input = require('./input.js');

const findEntries = (target, inputNumbers = []) => {
  const sortedNumbers = inputNumbers.sort((a, b) => a - b);

  for (let index = 0; index < sortedNumbers.length; index++) {
    for (let i = index + 1; i < sortedNumbers.length; i++) {
      for (let k = i + 1; k < sortedNumbers.length; k++) {
        const sum = sortedNumbers[index] + sortedNumbers[i] + sortedNumbers[k];

        if (sum === target) {
          let firstEntryPosition = sortedNumbers[index];
          let secondEntryPosition = sortedNumbers[i];
          let thirdEntryPosition = sortedNumbers[k];

          console.log(
            `sortedNumbers[${index}]:`,
            sortedNumbers[index],
            `sortedNumbers[${i}]:`,
            sortedNumbers[i],
            `sortedNumbers[${k}]:`,
            sortedNumbers[k],
          );

          return firstEntryPosition * secondEntryPosition * thirdEntryPosition;
        }
      }
    }
  }
};

console.log(findEntries(2020, input));
