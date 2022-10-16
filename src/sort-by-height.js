const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let ind = [];

  let height = arr.filter((item, index) => {
    if(item === -1) {
      ind.push(index);
    }
    return item > 0;
  })

  heightSort = height.sort((a, b) => a - b);

  ind.forEach(i => {
    heightSort.splice(i, 0, -1);
  })

  return heightSort
}

module.exports = {
  sortByHeight
};
