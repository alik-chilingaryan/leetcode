var findKthPositive = function (arr, k) {
  let num = 1;
  let count = 0;
  while (count < k) {
    if (!arr.includes(num)) {
      ++count;
    }
    if (count === k) {
      return num;
    }
    ++num;
  }
};

let arr = [2, 3, 4, 7, 11];
let k = 5;
console.log(findKthPositive(arr, k));
