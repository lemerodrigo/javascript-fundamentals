
const arr = [2, 4, 6, 7, 9, 12];
const newSum = [];
function add2([arr]) {
  for (let i = 0; i < arr.length; i += 1) {
    newSum.push(arr[i] + 2);
    return newSum;
  }
}
