module.exports = function countCats(matrix) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  return matrix.flat().filter(e => e === '^^').length;
};
