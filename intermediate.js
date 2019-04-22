// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  const odd = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 1) {
      odd.push(array[i]);
    }
  }
  return odd;
}

console.log(returnOdds([1, 2, 3, 4, 5, 6]));

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  const even = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      even.push(array[i]);
    }
  }
  return even;
}
console.log(returnEvens([1, 2, 3, 4, 5, 6]));
// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  let b = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (b === 0) {
      b = array[i];
    } if (array[i] > b) {
      b = array[i];
    }
  }
  return b;
}
console.log(findMax([1, -23, -45, 60]));
/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  let str = '';
  console.log(string);
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      str += string[i];
    }
  }
  return str;
}
console.log(trim('  casa    '));
