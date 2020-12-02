const input = require('./input.json');

const getPolicy = (entry) => {
  const policyArray = entry.split(' ');
  const value = policyArray[1];
  const [min, max] = policyArray[0].split('-');
  return { value, min, max };
};

const isValid = (policy, password = '') => {
  let numberOfTimes = password.split(policy.value).length - 1;
  if (numberOfTimes >= policy.min && numberOfTimes <= policy.max) {
    return true;
  }
  return false;
};

function getNumberOfValidPasswords(inputData = []) {
  let numberValids = 0;

  inputData.forEach(({ password, ...rest }) => {
    const policy = getPolicy(rest.policy);
    if (isValid(policy, password)) {
      numberValids++;
    }
  });

  return numberValids;
}

console.log(getNumberOfValidPasswords(input.data));
