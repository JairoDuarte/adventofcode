const input = require('./input');

const formatPassport = (passport) =>
  passport
    .split('\n')
    .join(' ')
    .split(' ')
    .filter((item) => item.length > 0)
    .map((item) => {
      const [key, value] = item.split(':');
      return { [key]: value };
    })
    .reduce((first, second) => ({ ...first, ...second }));

const validateBirthYear = (value) => parseInt(value, 10) >= 1920 && parseInt(value, 10) <= 2002;
const validateIssueYear = (value) => parseInt(value, 10) >= 2010 && parseInt(value, 10) <= 2020;
const validateExpirationYear = (value) => parseInt(value, 10) >= 2020 && parseInt(value, 10) <= 2030;
const validateHeight = (value) => {
  const unit = value.slice(-2);
  const value_ = parseInt(value.replace(unit, ''));

  if (unit === 'in') return value_ >= 59 && value_ <= 76;
  else if (unit === 'cm') return value_ >= 150 && value_ <= 193;
  return false;
};

const validateHairColor = (value) => {
  const colorCode = value.slice(1);
  const hex = parseInt(colorCode, 16);
  return value[0] === '#' && hex.toString(16) === colorCode;
};
const validateEyeColor = (value) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value);
const validatePassportID = (value) => value.length === 9;

const validations = {
  byr: validateBirthYear,
  iyr: validateIssueYear,
  eyr: validateExpirationYear,
  hgt: validateHeight,
  hcl: validateHairColor,
  ecl: validateEyeColor,
  pid: validatePassportID,
};

const validPassport = (requiredFields = [], passportContent = '') => {
  const passport = formatPassport(passportContent);

  for (const field of requiredFields) {
    if (!passportContent.includes(field) || !validations[field](passport[field])) return false;
  }
  return true;
};

const getNumberOfValidPassports = (requiredFields = [], inputData = '') => {
  const passports = inputData.split('\n\n').filter((line) => line.length > 0);
  let numberOfValidPassports = 0;

  passports.forEach((passport) => {
    if (validPassport(requiredFields, passport)) numberOfValidPassports++;
  });

  return numberOfValidPassports;
};

console.log(getNumberOfValidPassports(['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'], input));
