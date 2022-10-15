const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  str = String(str);

  if(options.addition || options.addition === false || options.addition === null) {
    options.addition = String(options.addition)
    if(!options.additionSeparator) {
      options.additionSeparator = '|';
    }
    if(options.additionRepeatTimes) {
      options.addition += options.additionSeparator;
      options.addition = options.addition.repeat(options.additionRepeatTimes);
      options.addition = options.addition.slice(0, -options.additionSeparator.length)
    }
    str +=  options.addition;
  }
  if(!options.separator) {
    options.separator = '+';
  }
  if(options.repeatTimes) {
    str += options.separator;
    str = str.repeat(options.repeatTimes);
    str = str.slice(0,-options.separator.length);
  }
  return str
}

module.exports = {
  repeater
};
