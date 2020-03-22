module.exports = function transform(arr) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    if (!Array.isArray(arr)) throw new Error('error');
    
    const buff = [];
    let skip = false;

    arr.forEach((el, i, array) => {
        if (skip) skip = false;
        else {
            switch(el) {
                case '--double-next':
                    if (i < array.length - 1) buff.push(array[i + 1]);
                    break;
                case '--double-prev':
                    if (i) buff.push(array[i - 1]);
                    break;
                case '--discard-next':
                    skip = true;
                    break;
                case '--discard-prev':
                    if(buff.length > 0) buff.pop();
                    break;
                default:
                    buff.push(el);
                    break;
            }
        }          
    });

    return buff;
};
