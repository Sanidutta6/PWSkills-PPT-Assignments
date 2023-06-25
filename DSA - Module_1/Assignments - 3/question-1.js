/*
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

const ThreeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum == target) {
        return sum;
      } else if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      }

      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }
    }
  }

  return closestSum;
};

const nums = [4, 0, 5, -5, 3, 3, 0, -4, -5],
  target = -2;
console.log(ThreeSumClosest(nums, target));
