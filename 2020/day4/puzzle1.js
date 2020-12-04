const input = require('./input');

const validPassport = (requiredFields = [], passport = '') => {
  for (const field of requiredFields) {
    if (!passport.includes(field)) return false;
  }
  return true;
};

const getNumberOfValidPassports = (requiredFields = [], inputData = '') => {
  const passports = inputData.split('\n\n').filter((line) => line.length > 0);
  console.log(passports);
  let numberOfValidPassports = 0;

  passports.forEach((passport) => {
    if (validPassport(requiredFields, passport)) numberOfValidPassports++;
  });

  return numberOfValidPassports;
};
console.log(getNumberOfValidPassports(['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'], input));
