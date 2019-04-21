// adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
function addTwo(number) {
  const resultaddTwo = number + 2;
  return resultaddTwo;
}
console.log(addTwo(2));

// adds the two inputted numbers together
// ex: add(5, 10); -> 15
function add(num1, num2) {
  const resultadd = num1 + num2;
  return resultadd;
}
console.log(add(2, 5));

// adds all three inputted numbers together
// ex: addd(1,2,3); -> 6
// ex: addd(2,4,2); -> 8
function addd(value1, value2, value3) {
  const resultaddd = value1 + value2 + value3;
  return resultaddd;
}
console.log(addd(1, 2, 3));

// subtracts the second inputted number from the first inputted number
// ex: subtract(5, 10); -> -5
function subtract(n1, n2) {
  const resultsubtract = n1 - n2;
  return resultsubtract;
}
console.log(subtract(5, 10));

// multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
function multiplyByTwo(numero) {
  const resultmultiplyByTwo = numero * 2;
  return resultmultiplyByTwo;
}
console.log(multiplyByTwo(6));

// multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4
function multiply(val1, val2) {
  const resultmultiply = val1 * val2;
  return resultmultiply;
}
console.log(multiply(2, 2));

// multiplies all three inputted numbers together
// ex: multiplyy(1,2,3); -> 6
// ex: multiplyy(2,2,3); -> 12
function multiplyy(a, b, c) {
  const resultmultiplyy = a * b * c;
  return resultmultiplyy;
}
console.log(multiplyy(1, 2, 3));

// returns the square of the inputted number
// ex: square(5); -> 25
function square(value) {
  const resultsquare = value ** 2;
  return resultsquare;
}
console.log(square(5));

// determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
// ex: isOdd(4); -> true
// ex: isOdd(5); -> false
function isOdd(num) {
  let resultisOdd;
  if (num % 2 !== 0) {
    resultisOdd = true;
  } else {
    resultisOdd = false;
  }
  return resultisOdd;
}
console.log(isOdd(3));


// determines if the number is negative
// outputs true if the number is negative
// outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false
function isNegative(num) {
  let resultIsNegative;
  if (num < 0) {
    resultIsNegative = true;
  } else {
    resultIsNegative = false;
  }
  return resultIsNegative;
}
console.log(isNegative(-10));

// returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
function positive(num) {
  let resultpositive;
  if (num < 0) {
    resultpositive = num * -1;
  } else {
    resultpositive = num;
  }
  return resultpositive;
}

console.log(positive(-5));


// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
  let resultisNumber;
  if (typeof(value) === 'number') {
    resultisNumber = true; 
  } else {
    resultisNumber = false;
  }
  return resultisNumber;
}
console.log(isNumber('hi'));


// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray(value) {
  let resultisArray;
  if (value === []) {
    resultisArray = true;
  } else {
    resultisArray = false;
  }
  return resultisArray;
}
console.log(isArray(5));

// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → false
function isObject(value) {
  let resultisObject;
  if (value === {}) {
    resultisObject = true;
  } else {
    resultisObject = false;
  }
  return resultisObject;
}
console.log(isObject(5));

// return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false
function isNull(value) {
  let resultisNull;
  if (value === null) {
    resultisNull = true;
  } else {
    resultisNull = false;
  }
  return resultisNull;
}
console.log(isNull(16));



// #####################################
// training LOOPINGS: 
// ordem crescente (1-10);
for (i = 0; i < arr.length; i += 1)

// ordem decrescente (10-0);
for (let i = arr.length; i > 0; i -= 1)
    
// repetindo 3x msm elemento string "letter";
function y(arr){
  let triple = [];
for (let a = arr.length; a > 0; a -= 1){
  if(arr[a] === arr[a-1]){
    triple.push(arr[a]);
    triple.push(arr[a]);
    triple.push(arr[a]);
  }
  return triple;
}

//  IMPORTANT!!!!
// ******elemento >>> arr[0]
// ******indice = indexOf >>> arr.indexOf('a')

// removendo elementos repetidos
function remove(arr){
  let unique = [];
  for (i = 0; i < arr.length; i += 1){
    if ( arr[i] === arr[i] ){
      unique = unique + arr.pop(i);
    }
  }
  return arr;

// pulando elementos;
function kanguroo(arr){
  let newArr =[];
  for (i = arr.length; i > 0; i += 2){
    console.log(kanguroo([1,2,3,4]));
    return newArr.push(arr);
  }
}

// estudar*****
// .map