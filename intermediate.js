// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  const result = [];
  array.forEach((element) => {
    if (element % 2 !== 0) {
      result.push(element);
    }
  });
  return result;
}

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  const result = [];
  array.forEach((element) => {
    if (element % 2 === 0) {
      result.push(element);
    }
  });
  return result;
}

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  array.sort((a, b) => a - b);
  return array[array.length - 1];
}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      result += string[i];
    }
  }
  return result;
}
