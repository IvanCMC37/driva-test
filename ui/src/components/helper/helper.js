const stringChecker = (validator, input, min, max, number = false) => {
  const inputHasValue = input;
  const inputIsAlpha = validator.isAlpha(input);
  const inputIsAlphanumeric = validator.isAlphanumeric(input);
  const inputWithinLength = validator.isLength(input, min, max);

  if (!inputHasValue && min === 0) return false;
  console.log('Input : ' + input);
  //   console.log(number);
  console.log('Input is not Alpha : ' + !inputIsAlpha);
  console.log('Input is not Alphanumeric : ' + !inputIsAlphanumeric);
  console.log('Input is not within length : ' + !inputWithinLength);
  console.log('Input has no value : ' + !inputHasValue);

  if (number) {
    return !inputHasValue || !inputIsAlphanumeric || !inputWithinLength;
  }
  return !inputHasValue || !inputIsAlpha || !inputWithinLength;
};

module.exports = {
  stringChecker,
};
