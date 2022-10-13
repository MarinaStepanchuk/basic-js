const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
if(!date){
  return 'Unable to determine the time of year!'
}
if(!date.getMonth){
  return 'throw!ErrorInvalid date!'
}
let mounth = date.getMonth();
if(mounth === 10 || 11 || 0) {
  return 'winter'
} else if(mounth === 1 || 2 || 3) {
  return 'spring'
} else if (mounth === 4 || 5 || 6) {
  return 'summer'
} else if(mounth === 7 || 8 || 9 ) {
  return 'autumn'
} else {
  return 'throw!ErrorInvalid date!'
}

module.exports = {
  getSeason
};
