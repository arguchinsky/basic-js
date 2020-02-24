module.exports = function getSeason(date) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  if (!arguments[0]) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date).includes('Date')){
    const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
    return seasons[date.getMonth()];
  }
  
  throw new Error('invalid date');
};
