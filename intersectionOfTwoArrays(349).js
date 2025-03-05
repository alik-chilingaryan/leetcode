var intersection = function (nums1, nums2) {
  let tmp = [];
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  for (let n of set1) {
    if (set2.has(n)) {
      tmp.push(n);
    }
  }
  return tmp;
};

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
intersection(nums1, nums2);
