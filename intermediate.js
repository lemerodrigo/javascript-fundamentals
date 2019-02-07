// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]

// { resolutions }

// function returnOdds(array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] % 2 !== 0) {
//       arr += array[i];
//     }
//   }
//   return arr.split('').map(Number);
// }
// console.log(returnOdds([1, 2, 3, 4, 5, 6, 7]));

//-------------------

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]

// { resolutions }

// function returnEvent(array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] % 2 === 0) {
//       arr += array[i];
//     }
//   }
//   return arr.split('').map(Number);
// }
// console.log(returnEvent([1, 2, 3, 4, 5, 6, 7]));

//-------------------

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25

// { resolutions }

// function findMax(array) {
//   const max = Math.max(...array);
//   return max;
// }
// console.log(findMax([1, 25, 6, 3]));

//-------------------
/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
// function trim(string) {
//   const s = string.split(' ').join('');
//   return s;
// }
// console.log(trim(' hello '));
