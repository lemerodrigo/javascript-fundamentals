function returnOdds(array) {
  const a = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 1) {
      a.push(array[i]);
    }

  }
  return a;
}


console.log(returnOdds([1, 2, 3, 4, 5, 6, 7]));
