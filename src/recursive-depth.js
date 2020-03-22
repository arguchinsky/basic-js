module.exports = class DepthCalculator {
    calculateDepth(arr) {
        // throw 'Not implemented';
        // remove line with error and write your code here
        let depth = 1;
        let tempDepth = 1;
        arr.forEach(el => {
            if (Array.isArray(el)){
                tempDepth += this.calculateDepth(el);
            }
            depth = depth < tempDepth ? tempDepth : depth;
            tempDepth = 1;
        });
        return depth;
    }
};
