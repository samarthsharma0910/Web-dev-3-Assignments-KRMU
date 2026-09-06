function isEven(value) {
  return Number.isInteger(value) && value % 2 === 0;
}

module.exports = isEven;
