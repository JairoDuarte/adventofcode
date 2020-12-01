const input = require("./input");

const findEntries = (target, inputNumbers = []) => {
    const sortedNumbers = inputNumbers.sort((a, b) => a - b);

    let sum = 0;
    let firstEntryPosition = 0;
    let secondEntryPosition = sortedNumbers.length - 1;

    while (sum != target) {
        sum = sortedNumbers[firstEntryPosition] + sortedNumbers[secondEntryPosition];

        if (sum < target) {
            firstEntryPosition++;
        } else if (sum > target)
            secondEntryPosition--;
    }

    console.log(`sortedNumbers[${firstEntryPosition}]:`, sortedNumbers[firstEntryPosition], `sortedNumbers[${secondEntryPosition}]:`, sortedNumbers[secondEntryPosition]);

    return sortedNumbers[firstEntryPosition] * sortedNumbers[secondEntryPosition];
}
console.log(findEntries(2020, input));