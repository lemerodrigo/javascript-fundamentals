// ######################################### //

// 1. Write a literal object called obj with 3 properties.

let Camaro = {
  horsePower: '500hp',
  color: 'red',
  topSpeed: '300km/h'
};

// ######################################### //

// 2. Write an array called arrEx2 with length 3.

let arrEx2 = [0, 1, 2]

// ######################################### //

// 3. Write a loop using for structure that prints all positive numbers until 48 (including 48).

for(let i = 0; i <= 48; i += 1) {
  console.log(i);
}

// ######################################### //

// 4. Write a loop using for structure that prints all negative numbers until -30 (excluding).

for(let j = -1; j > -31; j -= 1){
  console.log(j);
}

// ######################################### //

// 5. Write a loop using for structure that prints all numbers from 102 (including) to 32 (including) in steps of 2.

for(let k = 102; k >= 32; k -= 2) {
  console.log(k)
}

// ######################################### //

// 6. Given the array below, write a function add2 that will receive the array as an argument and will return a new array with all items of the original array added by 2.

const arrEx6 = [2, 4, 6, 7, 9, 12];

let = add = arr => {arr.forEach(element => {element + 2})};

console.log(add(arrEx6));

// ######################################### //

// 7. Given an array of numbers, write a function checkSum that returns the string 'even' if the sum of all values are even, otherwise return 'odd';

const arrEx7 = [1, 2, 3];

const checkSum = arr => {
  let sum = 0;
  for(let i = i; i < arr.length; i += 1) {
    sum += arr[i];
    if(sum % 2 === 0) {
      return 'even';
    }else {
      return 'odd';
    }
  }
};

// ######################################### 
