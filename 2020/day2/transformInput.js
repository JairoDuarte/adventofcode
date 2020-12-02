const fs = require('fs');

const getValue = (lign = '') => {
  const arrayLign = lign.split(':');
  return { policy: arrayLign[0], password: arrayLign[1].trim() };
};

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const listOfInput = data.split('\n');
  let result = [];
  listOfInput.forEach((element) => {
    result.push(getValue(element));
  });

  fs.writeFile('input.json', JSON.stringify({ data: result }), 'utf8', (error) => error && console.log(error));
});
