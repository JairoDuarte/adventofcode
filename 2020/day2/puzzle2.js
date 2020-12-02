const input = require('./input.json');

const getPolicy = (entry = '') => {
  const policyArray = entry.split(' ');
  const value = policyArray[1];
  const [position1, position2] = policyArray[0].split('-');
  return { value, position1, position2 };
};

const isValidPassword = (policy, password = '') => {
  const position1Value = password.charAt(policy.position1 - 1);
  const position2Value = password.charAt(policy.position2 - 1);
  if (position1Value === position2Value) {
    return false;
  }
  if (position1Value === policy.value || position2Value === policy.value) {
    return true;
  }
  return false;
};

function getNumberOfValidPasswords(inputData = []) {
  let numberValid = 0;
  inputData.forEach(({ password, ...rest }) => {
    const policy = getPolicy(rest.policy);
    if (isValidPassword(policy, password)) {
      numberValid++;
    }
  });

  return numberValid;
}

console.log(getNumberOfValidPasswords(input.data));
