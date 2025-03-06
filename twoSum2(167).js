var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; ++i) {
    let tmp = target - nums[i];
    if (obj.hasOwnProperty(tmp)) {
      return [obj[tmp], i];
    }
    obj[nums[i]] = i;
  }
  return [];
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
