// ######################################### //
// >>>> BUGS!!! nao consegiu checkar com TESTS.js... 

// 1. Write a literal object called obj with 3 properties.

let literalObj = {
  nome: 'Karen',
  age: 32,
  book: 'Thoreau',
  showName: function() {
    alert( 'about: ' + this.name + 'your favorite book is about: ' + this.book )
  },
  // 3 propriedades e 1 metodo.

// ######################################### //

// 2. Write an array called arrEx2 with length 3.

let arrEx2 = ['Mia', 'Soso', 'Heitor', 'Gugu'],
// length = [0, 1, 2, 3]

// ######################################### //

// 3. Write a loop using for structure that prints all positive numbers until 48 (including 48).

function numbs() {
  newArr = [],
  for(let i = 0; i < 49; i += 1) {
    Math.sign( i === +) {
      arr.push([i]);
    }
    print (newArr);
  }
}
//OBS?????? o for, precisa estar dentro de uma funcao? se nao, em quais casos????

// ######################################### //

// 4. Write a loop using for structure that prints all negative numbers until -30 (excluding).
// callback??? >>> estou com dificuldades em construir uma callback... :(
function negative(numbs){
  let negative = [];
  if (Math.sign(numbs) === -){
    negative.push([i]);
  }
} 

// ###############################################
let newNegatives = [];
function negative() {
  for (let i = -30; i < 100; i += 1) {
    if ( i < 0 ) {
    newNegatives.push(i)
    }
    print (newNegatives);
  }
}

// 5. Write a loop using for structure that prints all numbers from 102 (including) to 32 (including) in steps of 2.
let newArr = [];
function even(){
 for (i = 30; i < 103; i += 2) {
   newArr.push(arr[i])
  print(newArr);
 }
} 

// ######################################### //

// 6. Given the array below, write a function add2 that will receive the array as an argument and will return a new array with all items of the original array added by 2.

const arr = [2, 4, 6, 7, 9, 12];
const newSum = [];
function add2([arr]) {
  for (let i = 0; i < arr.length; i += 1) {
    newSum.push(arr[i] + 2);
    return newSum;
  }
}

// code here

// ######################################### //

// 7. Given an array of numbers, write a function checkSum that returns the string 'even' if the sum of all values are even, otherwise return 'odd';

const arrEx7 = [1, 2, 3];

const checkSum = arr => {
  if (arr[i]%2 === 0){
    return('its even');
  } else {
    return('its odd');
  }
};

// ######################################### //
