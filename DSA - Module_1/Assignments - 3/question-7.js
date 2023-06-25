/*
You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

Example 1:
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

Explanation: The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]
*/

const MissingRanges = function (nums, lower, upper) {
  const missingRanges = [];

  if (nums.length === 0) {
    missingRanges.push([lower, upper]);
    return missingRanges;
  }

  if (nums[0] > lower) {
    missingRanges.push([lower, nums[0] - 1]);
  }

  // Find the missing ranges between adjacent elements
  for (let i = 0; i < nums.length - 1; i++) {
    const curr = nums[i];
    const next = nums[i + 1];

    if (next - curr > 1) {
      missingRanges.push([curr + 1, next - 1]);
    }
  }

  // Check if the last element is less than the upper bound
  if (nums[nums.length - 1] < upper) {
    missingRanges.push([nums[nums.length - 1] + 1, upper]);
  }

  return missingRanges;
};

const nums = [0, 1, 3, 50, 75],
  lower = 0,
  upper = 99;
console.log(MissingRanges(nums, lower, upper));
