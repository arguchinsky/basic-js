const chainMaker = {
  buff: [],
  getLength() {
    // throw 'Not implemented';
    // remove line with error and write your code here
    return this.buff.length;
  },
  addLink(value) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    arguments.length ? this.buff.push(value) : this.buff.push(' ');
    return this;
  },
  removeLink(position) {
    // throw 'Not implemented';
    if (typeof position !== 'number' || position <= 0 || position > this.buff.length){
      this.buff.length = 0;
      throw new Error('error');
    } 
    this.buff = this.buff.filter((el, i) => i !== position - 1);
    return this;
  },
  reverseChain() {
    //throw 'Not implemented';
    // remove line with error and write your code here;
    this.buff.reverse();
    return this;
  },
  finishChain() {
    //throw 'Not implemented';
    const chain = this.buff.map(el => `( ${el} )`).join('~~');
    this.buff.length = 0;
    return chain;
  }
};

module.exports = chainMaker;
