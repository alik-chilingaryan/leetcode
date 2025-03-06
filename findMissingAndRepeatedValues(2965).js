var findMissingAndRepeatedValues = function (grid) {
  let length = grid.length;
  let arr = grid.flat(Infinity).sort((a, b) => a - b);
  let output = [];

  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        output.push(arr[i]);
      }
    }
  }

  arr = new Set(arr);
  let x = 1;

  for (let val of arr) {
    console.log(val);
    if (!arr.has(x)) {
      output.push(x);
      break;
    }
    ++x;
  }
  length *= length;
  if (!arr.has(length)) {
    output.push(length);
  }

  return output;
};

console.log(findMissingAndRepeatedValues(grid));
