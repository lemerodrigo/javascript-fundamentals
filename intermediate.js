// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
	newArr = [];
	for(let i = 0; i < array.length; i +=1){
		if(array[i] % 2 !== 0){
			newArr.push(array[i]);
		}
	}
	return newArr;
}
// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
	newArr = [];
	for(let i = 0; i < array.length; i +=1){
		if((array[i] % 2 === 0)){
			newArr.push(array[i]);
		}
	}
	return newArr;
}

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
	let max;
	max = Math.max(...array);
	return max;
}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
	let newStr = "";
	for(let i = 0; i < string.length; i +=1){
		if(string[i] !== " "){
			newStr += string[i];
		}
	}
	return newStr;
}

