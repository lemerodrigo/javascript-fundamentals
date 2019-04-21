//
// function add2(array) {
// let arr = [];
// for (let i = 0; i < array.length; i += 1) {
// arr = array[i] + 10;
// return arr;
// }
// }
// console.log(add2([1, 3, 5, 7]));


// const arrEx7 = [1, 2, 3];
//
// const checkSum = (arr) => {
// let a;
// for (let i = 0; i < arr.length; i += 1) {
// a += arr[i];
// }
// return a;
// };

// function checkSum(arr) {
// let a = 0;
// for (let i = 0; i < arr.length; i += 1) {
// a += arr[i];
// }
// if (a % 2 === 0) {
// return 'even';
// }
// return 'odd';
// }
// console.log(checkSum([1, 2, 4]));

function trim(string) {
  console.log(string);
  let str = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      str =  str + string[i];
    }
  }
  return str;
}
console.log(trim('                 hello '));
