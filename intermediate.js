// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  const oddArr = [];
  array.forEach((element) => {
    if (element % 2 === 1) oddArr.push(element);
  });
  return oddArr;
}

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvens([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  const evenArr = [];
  array.forEach((element) => {
    if (element % 2 === 0) evenArr.push(element);
  });
  return evenArr;
}

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  let max = 0;
  array.forEach((element) => {
    if (element > max) max = element;
  });
  return max;
}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  console.log(string.slice(1, string.length));
}
