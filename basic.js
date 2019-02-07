// adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8

// { resolutions }

// function addTwo(number) {
//   const sum = number + 2;
//   return sum;
// }

// console.log(addTwo(5));
// console.log(addTwo(6));

//-------------------

// adds the two inputted numbers together
// ex: add(5, 10); -> 15

// { resolutions }

// function add(num1, num2) {
//   const num = num1 + num2;
//   return num;
// }

// console.log(add(5, 10));

//-------------------

// adds all three inputted numbers together
// ex: addd(1,2,3); -> 6
// ex: addd(2,4,2); -> 8

// { resolutions }

// function addd(value1, value2, value3) {
//   const num = (value1 + value2 + value3);
//   return num;
// }
// console.log(addd(1, 2, 3));
// console.log(addd(2, 4, 2));

//-------------------

// subtracts the second inputted number from the first inputted number
// ex: subtract(5, 10); -> -5

// { resolutions }

// function subtract(n1, n2) {
//   const sub = n1 - n2;
//   return sub;
// }
// console.log(subtract(5, 10));

//-------------------

// multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12

// { resolutions }

// function multiplyByTwo(numero) {
//   const mult = numero * 2;
//   return mult;
// }
// console.log(multiplyByTwo(5));
// console.log(multiplyByTwo(6));

//-------------------

// multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4

// { resolutions }

// function multiply(val1, val2) {
//   const mult = val1 * val2;
//   return mult;
// }
// console.log(multiply(1, 2));
// console.log(multiply(2, 2));

//-------------------

// multiplies all three inputted numbers together
// ex: multiplyy(1,2,3); -> 6
// ex: multiplyy(2,2,3); -> 12

// { resolutions }

// function multiplyy(a, b, c) {
//   const mult = (a * b * c);
//   return mult;
// }
// console.log(multiplyy(1, 2, 3));
// console.log(multiplyy(2, 2, 3));

//-------------------

// returns the square of the inputted number
// ex: square(5); -> 25

// { resolutions }

// function square(value) {
//   const num = value ** 2;
//   return num;
// }
// console.log(square(5));

//-------------------

// determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
// ex: isOdd(4); -> false
// ex: isOdd(5); -> true

// { resolutions }

// function isOdd(num) {
//   if (num % 2 === 0) {
//     return false;
//   }
//   return true;
// }
// console.log(isOdd(4));
// console.log(isOdd(5));

//-------------------

// determines if the number is negative
// outputs true if the number is negative
// outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false

// { resolutions }

// function isNegative(num) {
//   if (num > 0 || num === 0) {
//     return false;
//   }
//   return true;
// }
// console.log(isNegative(-1));
// console.log(isNegative(1));
// console.log(isNegative(0));

//-------------------

// returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1

// { resolutions }

// function positive(num) {
//   let n = num;
//   if (n < 0) {
//     n *= -1;
//     return n;
//   }
//   return n;
// }
// console.log(positive(-1));
// console.log(positive(1));

//-------------------
// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false

// { resolutions }

// function isNumber(value) {
//   if (Number.isInteger(value)) {
//     return true;
//   }
//   return false;
// }
// console.log(isNumber(5));
// console.log(isNumber('hi'));

//-------------------

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true

// { resolutions }

// function isArray(value) {
//   if (Array.isArray(value)) {
//     return true;
//   }
//   return false;
// }
// console.log(isArray(5));
// console.log(isArray([1, 2, 3]));

//-------------------

// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → true

// { resolutions }

// function isObject(value) {
//   if (typeof value === 'object') {
//     return true;
//   }
//   return false;
// }
// console.log(isObject(5));
// console.log(isObject([1, 2, 3]));

//-------------------
// return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false

// { resolutions }

// function isNull(value) {
//   if (value === null) {
//     return true;
//   }
//   return false;
// }
// console.log(isNull(null));
// console.log(isNull(5));
