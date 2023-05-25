function returnsThree() {
  return 3
}

function reciprocal(n) {
  if(n < 1 || n > 100000) throw new RangeError('Only accepts arguments between 1-100,000')
  return 1/n
}

module.exports = {
  returnsThree,
  reciprocal
};
