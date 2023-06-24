/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

const twoSum = (nums, target) => {
  hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashMap) {
      return [hashMap[nums[i]], i];
    } else {
      hashMap[target - nums[i]] = i;
    }
  }
};

const nums = [3,3], target = 6;
console.log(twoSum(nums, target));