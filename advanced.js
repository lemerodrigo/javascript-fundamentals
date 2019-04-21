// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// var callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,[1,2,3] b,1,[1,2,3] c,2,[1,2,3]
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.

const each = [];
function forEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    function callback() {
      each.push(array[i]);
      each.push(i);
      each.push(array);
    }
    console.log(each);
    return forEach();
  }
}
forEach([1, 2, 3], '');

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map

arr.forEach((num, i) => arr[i] = num * 2);

const double = arr.map((num) => num * 2);

// function map(array, callback) {
// } ????????????????? <<<<<<

const numbers = [4, 9, 16, 25];
function map(array, callback) {
  x = document.getElementById('demo');
  x.innerHTML = numbers.map(Math.sqrt);
}

// Esse exemplo demonstra como usar o map de forma generica, em um String para recuperar a representação em ASCII de cada caracter em um array de bytes:
// var map = Array.prototype.map;
// var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
// // a agora vale [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

// Exemplo: Usando map para inverter uma stringSeção
// var str = '12345';
// [].map.call(str, function(x) {
//   return x;
// }).reverse().join('');
// Output: '54321'
// Bonus: utilize '===' para verificar se a string original e a nova string são palíndromos


// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
const array = [1, 2, 11];
function uniq(array) {
  const u = array.map(array[i] % 2 === 0);
  console.log(u);
  return u;
}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
// syntax: array.indexOf(elementoDePesquisa[, pontoInicial = 0])
function indexOf(array, value) {
  array.indexOf(55, [0]);
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
// syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
function reduce(array, callback, start) {
}
