const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
  console.log(str)
  if(Number(str) && typeof(str) === 'string' && Number(str) > 0 && Number(str) < MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY/Number(str))*HALF_LIFE_PERIOD/0.693)
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
