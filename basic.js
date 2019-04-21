// adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
function addTwo(number) {
  return number + 2;
}

// adds the two inputted numbers together
// ex: add(5, 10); -> 15
function add (num1, num2) {
  return num1 + num2;
}

// adds all three inputted numbers together
// ex: addd(1,2,3); -> 6
// ex: addd(2,4,2); -> 8
function addd (value1, value2, value3) {
  return value1 + value2 + value3;
}

// subtracts the second inputted number from the first inputted number
// ex: subtract(5, 10); -> -5
function subtract (n1, n2) {
  return n2 - n1;
}

// multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
function multiplyByTwo (numero) {
  return numero * 2;
}

// multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4
function multiply (val1, val2) {
  return val1 * val2;
}

// multiplies all three inputted numbers together
// ex: multiplyy(1,2,3); -> 6
// ex: multiplyy(2,2,3); -> 12
function multiplyy (a, b, c) {
  return a * b * c;
}

// returns the square of the inputted number
// ex: square(5); -> 25
function square (value) {
  return value ** 2;
}

// determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
// ex: isOdd(4); -> true
// ex: isOdd(5); -> false
function isOdd (num) {
  return num % 2 === 0 ? true : false;
}

// determines if the number is negative
// outputs true if the number is negative
// outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false
function isNegative (num) {
  return num < 0 ? true : false;
}

// returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
function positive (num) {
  return Math.abs(num);
}

// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber (value) {
  return typeof (value) === 'number' ? true : false;
}

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray (value) {
  return Array.isArray(value);
}

// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → false
function isObject (value) {
  return typeof (value) === 'object' && value.constructor === Object ? true : false;
}

// return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false
function isNull(value) {
  return value === null ? true : false;
}
