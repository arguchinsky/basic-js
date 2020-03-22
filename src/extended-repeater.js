module.exports = function repeater(str, options) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    const opAdd = options.addition === null ? `null` : options.addition;
    const withAddition = `${str}`+(new Array(options.additionRepeatTimes).fill(opAdd).join(options.additionSeparator || '+'));
    return new Array(options.repeatTimes).fill(withAddition).join(options.separator || '+');
};
  