// adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
const addTwo = number => number + 2;
console.log('Func 1 -->', addTwo(5));

// adds the two inputted numbers together
// ex: add(5, 10); -> 15
const add = (num1, num2) => num1 + num2;
console.log('Func 2 -->', add(5, 10));

// adds all three inputted numbers together
// ex: addd(1,2,3); -> 6
// ex: addd(2,4,2); -> 8
const addd = (value1, value2, value3) => value1 + value2 + value3;
console.log('Func 3 -->', addd(2, 4, 2));

// subtracts the second inputted number from the first inputted number
// ex: subtract(5, 10); -> -5
const subtract = (n1, n2) => n2 - n1;
console.log('Func 4 -->', subtract(5, 10));

// multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
const multiplyByTwo = numero => numero * 2;
console.log('Func 5 -->', multiplyByTwo(6));

// multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4
const multiply = (val1, val2) => val1 * val2;
console.log('Func 6 -->', multiply(2, 2));

// multiplies all three inputted numbers together
// ex: multiplyy(1,2,3); -> 6
// ex: multiplyy(2,2,3); -> 12
const multiplyy = (a, b, c) => a * b * c;
console.log('Func 7 -->', multiplyy(2, 2, 3));

// returns the square of the inputted number
// ex: square(5); -> 25
const square = value => value ** 2;
console.log('Func 8 -->', square(5));

// determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
// ex: isOdd(4); -> false
// ex: isOdd(5); -> true
const isOdd = num => num % 2 !== 0;
console.log('Func 9 -->', isOdd(5));


// determines if the number is negative
// outputs true if the number is negative
// outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false
const isNegative = num => num >= 0;
console.log('Func 10 -->', isNegative(0));
console.log('Func 10 -->', isNegative(-1));


// returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
const positive = num => (num < 0) ? num * 0 - num : num;
console.log('Func 11 -->', positive(-7));

// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
const isNumber = value => typeof value === 'number';
console.log('Func 12 -->', isNumber('hi'));
console.log('Func 12 -->', isNumber(45));

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
const isArray = value => Array.isArray(value);
console.log('Func 13 -->', isArray('hi'));
console.log('Func 13 -->', isArray(['hi']));


// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → false
const isObject = value => typeof value === 'object';
console.log('Func 14 -->', isObject({}));
console.log('Func 14 -->', isObject([1, 2, 3]));

// return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false
const isNull = value => value === null;
console.log('Func 15 -->', isNull(null));
console.log('Func 15 -->', isNull(5));

