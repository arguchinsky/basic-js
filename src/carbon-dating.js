const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  if (typeof sampleActivity !== 'string') return false;

  const decayRate = -0.693;
  const sActivity = parseFloat(sampleActivity);
  
  if (!isNaN(sActivity)) {
    if (sActivity < 1 || sActivity > MODERN_ACTIVITY) return false;

    const value = (Math.log(sActivity / MODERN_ACTIVITY) / decayRate) * HALF_LIFE_PERIOD;

    return Math.ceil(value);
  }
  
  return false;
};
