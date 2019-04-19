// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
const returnOdds = array => array.filter(e => e % 2 !== 0);
console.log('returnOdds --->', returnOdds([1, 2, 3, 4, 5, 6, 7]));

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
const returnEvens = (array) => {
  const result = [];
  array.forEach((el) => {
    if (el % 2 === 0) {
      result.push(el);
    }
  });
  return result;
};
//  Eu quis testar de outra forma.
console.log('returnEvens --->', returnEvens([1, 2, 3, 4, 5, 6, 7]));

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
const findMax = (array) => {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};
console.log('findMax --->', findMax([1, 25, 6, 3]));

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
const trim = (string) => {
  firstWhiteSpace = string.indexOf(' ') +1;
  lastWhiteSpace = string.lastIndexOf(' ');
  return string.slice(firstWhiteSpace, lastWhiteSpace);
}
console.log('Trim --->', trim(' hello '));

const trim2 = string => string.slice(string.indexOf(' ') + 1, string.lastIndexOf(' '));
console.log('Trim2 --->', trim2(' hello '));
