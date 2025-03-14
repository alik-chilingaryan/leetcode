var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 1; i <= nums.length; ++i) {
    let tmp = target - nums[i - 1];
    if (obj.hasOwnProperty(tmp)) {
      return [obj[tmp], i];
    }
    obj[nums[i - 1]] = i;
  }
  return [];
};

let nums = [2, 7, 11, 15];
let target = 9;
twoSum(nums, target);
