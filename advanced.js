// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// var callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,[1,2,3] b,1,[1,2,3] c,2,[1,2,3]
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(arr, callback1) {
    for (let i = 0; i < arr.length; i += 1)
    callback1(arr[i], i, arr)
}
function callback1(element, i, array){
    console.log(element, i, array)
}
forEach(['a','b','c'], callback1)

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
function map(array, callback2) {
    let arr = []
    for (let i = 0; i < array.length; i += 1){
    arr.push(callback2(array[i]))}
    console.log(arr)
}
function callback2(element){
    return element * 3    
}

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback3) {
    let newArr = []
    for(i = 0; i < collection.length; i += 1){
        newArr.push(callback3(collection[i]))
    
    }
}
function callback3(ele){
    if(ele % 2 === 0){
        return ele

    }
}
console.log()

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
function uniq(array) {
    newArray = []
    for(i = 0; i < array.length; i += 1){
        if(newArray.indexOf(array[i])=== -1){
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(uniq([1,2,1,1,2,3,4,5,4]))

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
    for(i = 0; i < array.length; i += 1){
        if(value === array[i]){
            return i
        }
    }
}
console.log(indexOf([11,22,5], 5))
// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
}
