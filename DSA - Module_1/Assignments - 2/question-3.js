/*
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
*/

const findLHS = (nums) => {
  const frequencyMap = new Map();
  let maxLength = 0;

  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  for (const [num, frequency] of frequencyMap) {
    if (frequencyMap.has(num + 1)) {
      const harmoniousLength = frequency + frequencyMap.get(num + 1);
      maxLength = Math.max(maxLength, harmoniousLength);
    }
  }

  return maxLength;
};

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums));