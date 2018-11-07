// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  let oddsArray = [];
  for (i=0; i<array.length; i++) {
    if (array[i] % 2 != 0) {
      oddsArray.push(i);
    }
  }
  return oddsArray;
}

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  let oddsArray = [];
  for (i=0; i<array.length; i++) {
    if (array[i] % 2 === 0) {
      oddsArray.push(i);
    }
  }
  return oddsArray;
}

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  console.log(array);
  return Math.max.apply(null, array);
}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  newString = string.replace(/ /gi, "");
  return newString;
}

