/*
Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1
*/

const findSingleNumber = (nums) => {
  let singleNumber = 0;
  for (let num of nums) {
    singleNumber ^= num;
  }
  return singleNumber;
};

const nums = [2, 2, 1];
console.log(findSingleNumber(nums));