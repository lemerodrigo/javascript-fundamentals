// ######################################### //

// 1. Write a literal object called obj with 3 properties.

// code here
const obj = {
  name: 'Julio',
  age: 30,
  job: 'Kodak',
};

// ######################################### //

// 2. Write an array called arrEx2 with length 3.
let arrEx2 = [5, 4, 7]
// code here

// ######################################### //

// 3. Write a loop using for structure that prints all positive numbers until 48 (including 48).
for (let i = 0; i <= 48; i += 1) {
  console.log(i);
}
// code here

// ######################################### //

// 4. Write a loop using for structure that prints all negative numbers until -30 (excluding).
for (let i = -1; i > -30; i -= 1) {
  console.log(i);
}
// code here

// ######################################### //

// 5. Write a loop using for structure that prints all numbers from 102 (including) to 32 (including) in steps of 2.
for (let i = 102; i >= 32; i -= 2) {
  console.log(i);
}
// code here

// ######################################### //

// 6. Given the array below, write a function add2 that will receive the array as an argument and will return a new array with all items of the original array added by 2.

// const arrEx6 = [2, 4, 6, 7, 9, 12];

// code here
function add2(array) {
  let arr = [];
  for (let i = 0; i < array.length; i += 1) {
    arr[i] = array[i] + 2;
  }
  return arr;
}
console.log(add2([1, 2, 4, 7, 9, 11]));

// ######################################### //

// 7. Given an array of numbers, write a function checkSum that returns the string 'even' if the sum of all values are even, otherwise return 'odd';

const arrEx7 = [1, 2, 3];

const checkSum = (arr) => {
  // code here
  let a = 0;
  for (let i = 0; i < arr.length; i += 1) {
    a += arr[i];
  }
  if (a % 2 === 0) {
    return 'even';
  }
  return 'odd';
};
console.log()

// ######################################### //
