// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
    odds = [];
    for (let i = 0; i < array.length; i += 1)
    if (array[i] % 2 === 1){
        odds.push(array[i]);
    }

    return odds;
}

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
    even = [];
    for (let i = 0; i < array.length; i += 1)
    if (array[i] % 2 === 0){
        even.push(array[i]);
    }

    return even;
}

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
let max = array.reduce(function(a,b){
    return Math.max(a,b);
})
return max;
}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
    return string.trim();
}
