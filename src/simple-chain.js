const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return chain.length;
  },
  addLink(value) {
    if(String(value)) {
      this.chain.push(`( ${String(value)} )`);
    } else {
      this.chain.push('( )');
    }
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position - Math.floor (position) > 0 || position - 1 < 0 || position-1 > this.chain.length-1) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position-1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const resultChain = this.chain.join('~~');
    this.chain = []
    return resultChain
  }
};

module.exports = {
  chainMaker
};
