const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  if (matrix === [0]) {
    return 0
  }

  let matrixNew = matrix;

  for (let i = 0; i < matrixNew.length; i++) {
    for (let j = 0; j < matrixNew[i].length; j++) {
      if (matrixNew[i][j] === 0) {
        for (let k = i; k < matrixNew.length; k++) {
          matrixNew[k][j] = 0
        }
      }
      sum += matrixNew[i][j]
    }
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
