// ######################################### //

// 1. Write a literal object called obj with 3 properties.

// code here

const obj = {
  name: String,
  age: Number,
  something: String,
};

// 2. Write an array called arrEx2 with length 3.

// code here

const arrEx2 = [1, 2, 3];

// 3. Write a loop using for structure that prints all positive numbers until 48 (including 48).

// code here

for (let i = 0; i <= 48; i += 1)
// console.log(i);

// 4. Write a loop using for structure that prints all negative numbers until -30 (excluding).

// code here
for (let i = -1; i > -30; i -= 1)
// console.log(i);

// 5. Write a loop using for structure that prints all numbers from 102 (including) to 32 (including) in steps of 2.

// code here

for (let i = 102; i >= 32; i -= 1)
// console.log(i);

// 6. Given the array below, write a function add2 that will receive the array as an argument and will return a new array with all items of the original array added by 2.

// code here
function add2(arr) {
  for(let i = 0; i < arr.length; i +=1){
    return arr[i] + 2;
  }
}
const arrEx6 = [2, 4, 6, 7, 9, 12];
console.log(add2(arrEx6));
// ???????????????????????
// NAO FAZ CONSOLE LOG, ERRO EM FUNCTION----

// 7. Given an array of numbers, write a function checkSum that returns the string 'even' if the sum of all values are even, otherwise return 'odd';

const checkSum = arr => {
  if( arr[i] % 2 !== 0){
    return 'even';
  }
  return 'odd';
};
const arrEx7 = [1, 2, 3];
console.log(checkSum(arrEx7));
// NAO FAZ CONSOLE LOG, ERRO EM CONST----
// ######################################### //
