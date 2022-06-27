module.exports = function reverse (n) {
  let strNum = String(Math.abs(n));
  let arrayNum = strNum.split('').reverse();
  return arrayNum.join('');
}
