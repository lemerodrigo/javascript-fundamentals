// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// var callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,[1,2,3] b,1,[1,2,3] c,2,[1,2,3]
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
  callback = function (value, index, array) {
    return `${value, index, array}`;
  }
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
function map(array, callback) {
  const arrayMap = []
  callback = function (value, index, array) {
    arrayMap.push(value * 3)
    return arrayMap;
  }
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
  return arrayMap
}

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
  const arrayFilter = [];
  callback = function (value, index, collection) {
    if (value % 2 === 0) {
      arrayFilter.push(value)
    }
    return arrayFilter;
  }
  for (let i = 0; i < collection.length; i++) {
    callback(collection[i], i, collection)
  }
  return arrayFilter;
}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
function uniq(array) {
  return [...new Set(array)];
}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
  let indexOf = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indexOf = i
      break;
    }
  }
  return indexOf;
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
  let reducedValue = 0
  if (start !== undefined) {
    array.unshift(start)
  }
  callback = function (accumulator, currentValue) {
    return accumulator + currentValue;
  }

  for (let i = 0; i < array.length; i++) {
    reducedValue += callback(0, array[i])
  }
  return reducedValue
}
