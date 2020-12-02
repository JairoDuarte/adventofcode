const input = require('./input.json');

const getPolicy = (entry) => {
  const policyArray = entry.split(' ');
  const value = policyArray[1];
  const [min, max] = policyArray[0].split('-');
  return { value, min, max };
};

const isValid = (policy, password = '') => {
  // split the password by the policy value,
  // if policy value exist in password, the return is an array with  length = the number of times the value appear in password + 1, then the numberOfTimes = length - 1
  // if policy value don't exist in password, the return is an array with length = 1, then the numberOfTimes = 1 - 1 = 0

  let numberOfTimes = password.split(policy.value).length - 1;
  if (numberOfTimes >= policy.min && numberOfTimes <= policy.max) {
    return true;
  }
  return false;
};

function getNumberOfValidPasswords(inputData = []) {
  let numberValid = 0;

  inputData.forEach(({ password, ...rest }) => {
    const policy = getPolicy(rest.policy);
    if (isValid(policy, password)) {
      numberValid++;
    }
  });

  return numberValid;
}

console.log(getNumberOfValidPasswords(input.data));
