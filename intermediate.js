// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
returnOdds([1, 2, 3, 4, 5]);
function returnOdds([arr]) {
  const impares = [];
  array.forEach((arr[i], i, arr) => {
    if ((elemento % 2) !== 0) {
      impares.push(returnOdds);
    }
    console.log(impares);
  });
  return returnOdds();
}


// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens([array]) {
  const pares = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      pares.push(array[i]);
    }
    console.log(pares);
    return returnEvens();
  }
  returnEvens([1, 2, 3, 4, 5]);
}


// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax([array]) {
  const max = array.reduce ([array] => Math.max[array]);
  console.log(max);
  return findMax();
}
findMax([1, 2, 3]);

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
const trim = [];
function checkMyString('string') {
  trim.push(string.slice(0, ' '));
  console.log(trim);
  return checkMyString();
}
checkMyString('ola, mundo');
