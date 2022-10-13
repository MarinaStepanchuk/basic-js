const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
if(!Array.isArray(arr) || !arr) {
  throw new Error ("'arr' parameter must be an instance of the Array!");
};
let array = []
for (let i = 0; i < arr.length; i++) {
  if(arr[i]) {
    switch (arr[i]) {
      case '--discard-next': i++;
      break;
      case '--discard-prev': if(array[i-1]) {array.pop()};
      break;
      case '--double-next':  if(arr[i+1] && Number(arr[i+1])) {array.push(arr[i+1])};
      break;
      case '--double-prev':  if(array[i-1] && Number(array[i-1])) {array.push(array[array.length-1])};
      break;
      default: array.push(arr[i]);
      break;
    }
  }
}
return array
}

module.exports = {
  transform
};
