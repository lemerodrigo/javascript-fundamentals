// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOddsVerbose(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      array.splice(i, 1)
    }
  } return array;
}
//console.log(returnOddsVerbose([1,2,3,4,5,6,7]))

function returnOdds(array) {
  return array.filter(e => e % 2 !== 0)
}
//console.log(returnOdds([1,2,3,4,5,6,7]))

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
    return array.filter(e => e % 2 === 0)
  }

//console.log(returnEvens([1,2,3,4,5,6,7]))

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
// Versão sem Math.max
function findMax(array) {
 let max = array[0];
 for (let i = 1; i < array.length; i += 1) {
   if (array[i] > max) {
     max = array[i];
    }
  }
    return max;
 }

//console.log(findMax([1,25,6,3]));

//Versão com Math.max
function findMaxM(array) {
  return Math.max(...array);
}

//console.log(findMaxM([1,25,6,3]));

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  return string.replace(' ', '');
}
//console.log(trim(' hello '));
