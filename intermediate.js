// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
    let oddArray = [];
    array.forEach(function (arr) {
        if (arr % 2 === 1) {
            oddArray.push(arr);
        }
    })
    return oddArray;
}

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
    let evenArray = [];
    array.forEach(function (arr) {
        if (arr % 2 === 0) {
            evenArray.push(arr);
        }
    })
    return evenArray;
}

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
    let max = 0;
    array.forEach(function (num) {
        if (num > max) {
            max = num;
        }
    })
    return max;
}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
    let str = string.slice(1, 6)
    return str
}