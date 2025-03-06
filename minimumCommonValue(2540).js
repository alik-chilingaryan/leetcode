var getCommon = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  for (let key of set2) {
    if (set1.has(key)) {
      return key;
    }
  }
  return -1;
};

// var getCommon = function (nums1, nums2) {
//   let i = 0;
//   let j = 0;

//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] > nums2[j]) {
//       ++j;
//     } else if (nums1[i] < nums2[j]) {
//       ++i;
//     } else {
//       return nums1[i];
//     }
//   }
//   return -1;
// };

let nums1 = [1, 1, 2, 2, 3];
let nums2 = [2, 2, 4, 4];
console.log(getCommon(nums1, nums2));
