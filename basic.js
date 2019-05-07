// adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
function addTwo(number) {
  number + 2;
  return number;
}
// console.log(addTwo(9));

// adds the two inputted numbers together
// ex: add(5, 10); -> 15
function add(num1, num2) {
  const resultAdd = num1 + num2;
  return resultAdd;
}
// console.log(add(12, 13));

// adds all three inputted numbers together
// ex: addd(1,2,3); -> 6
// ex: addd(2,4,2); -> 8
function addd(value1, value2, value3) {
  const resultAddd = value1 + value2 + value3;
  return resultAddd;
}
// console.log(addd(12, 13, 14));

// subtracts the second inputted number from the first inputted number
// ex: subtract(5, 10); -> -5
function subtract(n1, n2) {
  const resultSubtract = n1 - n2;
  return resultSubtract;
}
// console.log(subtract(10, 20));

// multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
function multiplyByTwo(numero) {
  numero * 2;
  return numero;
}
// console.log(multiplyByTwo(27));

// multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4
function multiply(val1, val2) {
  const resultMultiply = val1 * val2;
  return resultMultiply;
}
// console.log(multiply(25, 25));

// multiplies all three inputted numbers together
// ex: multiplyy(1,2,3); -> 6
// ex: multiplyy(2,2,3); -> 12
function multiplyy(a, b, c) {
  const resultMultiplyy = a * b * c;
  return resultMultiplyy;
}
// console.log(multiplyy(5, 10, 3));

// returns the square of the inputted number
// ex: square(5); -> 25
function square(value) {
  const resultSquare = value * value;
  return resultSquare;
}
// console.log(square(10));

// determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
// ex: isOdd(4); -> true
// ex: isOdd(5); -> false
function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}
// console.log(isOdd(25));

// determines if the number is negative
// outputs true if the number is negative
// outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false
function isNegative(num) {
  if (num < 0) {
    return true;
  }
  return false;
}
// console.log(isNegative(20));

// returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
function positive(num) {
  if (num < 0) {
    return num * -1;
  }
  return num;
}
// console.log(positive(-13));

// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
  if (typeof value === 'number') {
    return true;
  }
  return false;
}
// console.log(isNumber('baby'));

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray(value) {
  if (Array.isArray(value)) {
    return true;
  }
  return false;
}
// console.log(isArray(5));
// console.log(isArray([1, 2, 3]));

// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → false
function isObject(value) {
  if (typeof value !== 'object') {
    return false;
  } else if (!Array.isArray(value)) {
      return true;
    } else {
      return false;
    }
};

// console.log(isObject({}));
// console.log(isObject([1, 2, 3]));
// console.log(isObject('string'));

// return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false
function isNull(value) {
  if (value === null) {
    return true;
  }
  return false;
}
// console.log(isNull(null));
// console.log(isNull([1, 2, 3]));
