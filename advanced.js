// Iterates over all elements of an array invoking the callback function for each of the elements. The callback function should be passed the element, the current index, and the entire array.
// forEach(['a','b','c'], callback); → prints a,0,[1,2,3] b,1,[1,2,3] c,2,[1,2,3]
// For each element in the array, the callback we passed is called. The callback function can be customized, but in the above example, the callback prints out the element, index, and entire array.
const callbackForEach = (element, index, array) => {
  console.log(`${element},${index},${array}`);
};

const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }
};

// Creates an array of values by running each element of the collection through the callback function
// Should we explain what the map function returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you learned above to create the map function

const callbackMap = (element) => {
  return element * 3;
};

const map = (array, callback) => {
  const mapResult = [];
  array.forEach((element) => {
    mapResult.push(callback(element));
  });
  return mapResult;
};

// Iterates over all the elements of a collection, returning an Array of all the elements for which the callback is truthy.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// });
// → [2,4]
// filter({a: 1, b: 2, c: 3, d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]

const filter = (collection, callback) => {
  return collection.filter(element => callback(element));
};

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
const uniq = (array) => {
  const uniqArr = [];
  array.forEach((element) => {
    if (uniqArr.indexOf(element) === -1) uniqArr.push(element);
  });
  return uniqArr;
};

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
  let index = -1;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) index = i;
  }
  return index;
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, acc = 0) {
  let count = 0 + acc;
  for (let i = 0; i < array.length; i += 1) {
    count += array[i];
  }
  return count;
}
