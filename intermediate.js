// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]

function returnOdds(array) {
  let newArray = [];
  array.forEach(element => {    
    if( element % 2 === 1){
      newArray.push(element);      
    }
  });
  return newArray;
}
returnOdds([1,2,3,4,5,6,7]);

//------------------------------------------

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]

function returnEvens(array) {  
 let evenArray = [];
 array.forEach(element => {
  if( element % 2 === 0){
    evenArray.push(element);
  }
 });
 return evenArray;
}
returnEvens([1,2,3,4,5,6,7]);

//------------------------------------------

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  let maxElement = 0;
  array.forEach(element => {
    if( element > maxElement ){
      maxElement = element;
    }
  });
return maxElement;
}
findMax([1,25,6,3]);

//------------------------------------------

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  return string.trim();
}
trim(' hello ');

// #Done (^̮^)