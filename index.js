const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */


class DepthCalculator {
  calculateDepth(arr, count = 1) {
    count = 1;
    if(Array.isArray(arr)){
      if (arr.length === 0) {
        return count;
      }
      arr.forEach(element => {
        count = count + this.calculateDepth(element, count = 0);
      })
      return count
    } 
    return count
  }
}

const z = new DepthCalculator();


module.exports = {
  DepthCalculator
};
