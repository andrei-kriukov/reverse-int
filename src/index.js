module.exports = function reverse (n) {
    let result = '';
    let string = n + '';
    for (let i = string.length - 1; i >= 0 ; i--) {
      if (string[i] === '-') {
        continue;
      }
      result = result + string[i];
    }
    return result;
}