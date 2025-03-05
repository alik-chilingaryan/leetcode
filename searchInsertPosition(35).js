var searchInsert = function (nums, target) {
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  for (let i = 0; i < nums.length; ) {
    if (target > nums[i]) {
      ++i;
    }
    if (target <= nums[i]) {
      return i;
    }
  }
};

let nums = [1, 3, 5, 6];
let target = 5;
console.log(searchInsert(nums, target));
