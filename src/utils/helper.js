const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

const twoDecimals = (num) => {
  return num.toFixed(2);
};

const roundNumber = (num) => {
  return Math.round(num);
};

const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export { isEmpty, twoDecimals, roundNumber, capitalizeFirst };
