var guessNumber = function (n) {
  let start = 0;
  let end = n;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (!guess(mid)) {
      return mid;
    } else if (guess(mid) === -1) {
      end = mid - 1;
    } else if (guess(mid) === 1) {
      start = mid + 1;
    }
  }
};
