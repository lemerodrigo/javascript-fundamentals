// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  let odd = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
    }
  }return odd;
}

// let returnOdds = array => array.forEach(element => ); {}


// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  let evens = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    }
  }return evens;
}

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  Math.max.apply(null, array);
}

function findMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (max < array[i]) {
      max = array[i];
    }
  }return max;
}

let findMax = array => {Math.max.apply(null,array)};

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  return string.split(' ');
}

let trim = string => {string.split(' ')};
