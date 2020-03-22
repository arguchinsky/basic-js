module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    const secondsInHour = 60 * 60;
    const turns = Math.pow(2, disksNumber) - 1;
    const seconds = turns / (turnsSpeed / secondsInHour) ;
    return {
        turns: turns,
        seconds: seconds,
    };
}
