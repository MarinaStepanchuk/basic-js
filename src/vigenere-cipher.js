const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direction) {
    this.direction = direction
  }
  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    let messageNew = (String(this.direction) === 'false')? message.split('').reverse().join('') : message;
    let indexSpace = [];
    for (let i = 0; i < messageNew.length; i++) {
      if(messageNew[i] === ' ') {
        indexSpace.push(i)
      }
    }
    let string = messageNew.split(' ').join('');
    let repeat = Math.ceil(string.length / key.length)
    let keyString = key.repeat(repeat).substring(0, string.length)
    let str = '';
    for (let i = 0; i < string.length; i++) {
      if(string[i].toUpperCase().charCodeAt(0) <= 90 && string[i].toUpperCase().charCodeAt(0) >= 65) {
          let codeLetter = string[i].toUpperCase().charCodeAt(0);
          let codeKey = keyString[i].toUpperCase().charCodeAt(0);
          if(codeLetter + (codeKey - 65) > 90) {
            str += String.fromCharCode(codeLetter + codeKey - 91)
          } else {
            str += String.fromCharCode(codeLetter + codeKey - 65)
          }
      } else {
        str += string[i];
      }
    }
    let arrCode = str.split('')

    indexSpace.forEach(ind => {
      arrCode.splice(ind, 0, ' ')
    })
    let result = arrCode.join('')
    return result;
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!')
    }
    let messageNew = (String(this.direction) === 'false')? encryptedMessage.split('').reverse().join('') : encryptedMessage;
    let indexSpace = [];
    for (let i = 0; i < messageNew.length; i++) {
      if(messageNew[i] === ' ') {
        indexSpace.push(i)
      }
    }
    let string = messageNew.split(' ').join('');
    let repeat = Math.ceil(string.length / key.length)
    let keyString = key.repeat(repeat).substring(0, string.length)
    let str = '';
    for (let i = 0; i < string.length; i++) {
      if(string[i].toUpperCase().charCodeAt(0) <= 90 && string[i].toUpperCase().charCodeAt(0) >= 65) {
          let codeLetter = string[i].toUpperCase().charCodeAt(0);
          let codeKey = keyString[i].toUpperCase().charCodeAt(0);
          if(codeKey <= codeLetter) {
            str += String.fromCharCode(65 - (codeKey - codeLetter))
          } else {
            str += String.fromCharCode(91 - (codeKey - codeLetter))
          }
      } else {
        str += string[i];
      }
    }
    let arrCode = str.split('')
    indexSpace.forEach(ind => {
      arrCode.splice(ind, 0, ' ')
    })
    let result = arrCode.join('')
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
