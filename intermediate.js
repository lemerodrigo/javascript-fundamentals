// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
let oddArr = [];

function returnOdds(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  return oddArr;
}

// console.log(returnOdds([1, 2, 3, 4, 5, 6, 7]));

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
let evenArr = [];

function returnEvens(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      evenArr.push(array[i]);
    }
  }
  return evenArr;
}

// console.log(returnEvens([1, 2, 3, 4, 5, 6, 7]));

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > array[i + 1]) {
      return array[i];
    }
    return array[i + 1];
  }
}

// console.log(findMax([1, 25, 6, 3]));

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  let trimmed = string.trim();
  return trimmed;
}

// console.log(trim(' hello '));
