/*
Given an integer numsay nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6
*/

const maxProductOfThreeNum = (nums) => {
  let max = -Infinity,
    secondMax = -Infinity,
    thirdMax = -Infinity;
  let min = Infinity,
    secondMin = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      [max, secondMax, thirdMax] = [nums[i], max, secondMax];
    } else if (nums[i] > secondMax) {
      [secondMax, thirdMax] = [nums[i], secondMax];
    } else if (nums[i] > thirdMax) {
      thirdMax = nums[i];
    }

    if (nums[i] < min) {
      [min, secondMin] = [nums[i], min];
    } else if (nums[i] < secondMin) {
      secondMin = nums[i];
    }
  }

  return Math.max(max * secondMax * thirdMax, max * min * secondMin);
};

const nums = [1, 2, 3];
console.log(maxProductOfThreeNum(nums));