// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  let oddsArray = [];
  let evensArray = [];
  for ( let i = 0; i < array.length; i++) {
    if ((array[i] % 2) !== 0) { 
      oddsArray.push(array[i]); 
    }
     else {
      evensArray.push(array[i]);
  }
};

console.log(returnOdds([1,2,3,4,5,6,7]));


// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  function evensFilter() { 
  return array % 2 !== 0;
  };
  return array.filter(evensFilter);
};

console.log(returnEvens([1,2,3,4,5,6,7]));

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  return array.reduce(function(acc, cvalue) {
    return Math.max(acc, cvalue)
  });
};

console.log(findMax([1,25,6,3]));

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  return string.trim();
};

console.log(trim(' hello '));
