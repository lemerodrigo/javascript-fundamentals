// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
let oddArr = [];

function returnOdds(array) {
  return array.filter(evenArr => evenArr % 2 !== 0);
}

// console.log(returnOdds([1, 2, 3, 4, 5, 6, 7]));

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
let evenArr = [];

function returnEvens(array) {
  return array.filter(evenArr => evenArr % 2 === 0);
}

// console.log(returnEvens([1, 2, 3, 4, 5, 6, 7]));

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  const max = array.reduce((a, b) => {
    return Math.max(a, b);
  });
  return max;
}

// console.log(findMax([1, 25, 6, 3]));

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  return string.slice(1, (string.length - 1));
}

// console.log(trim(' hello '))
