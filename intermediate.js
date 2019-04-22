// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
    let newArr = [];
    for(i = 0; i < array.length; i += 1){
        if(array[i] % 2 != 0){
            newArr.push(array[i])
        }
    }
    return newArr
}
// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
    let newArr = [];
    for(i = 0; i < array.length; i += 1){
        if(array[i] % 2 === 0){
            newArr.push(array[i])
        }
    }
    return newArr
}

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
    let largest = 0
    array.forEach(element => {
        if(element > largest){
            largest = element
        }
    });
    return largest
}
/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
    let newstr = ""
    for(i = 0; i < string; i += 1){
        if(string(i) = " "){
            newstr.pop(string(i))
        }
    }
return newstr
}
b="akjbca akdh cajd "
console.log(trim(b))