// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
    for(i=1; i <= 10; i += 2) {
        console.log(i);
    }
}
returnOdds();

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
    for(i=1; i <= 10; i += 1) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}
returnEvens();

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
    return(Math.max.apply(Math, array));
}
console.log(findMax([8, 23, 88, 3, 7, 93, 100, 9]));

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
    return(string.trim());
}
console.log(trim(" Radisol   "));