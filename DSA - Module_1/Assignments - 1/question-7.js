/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.
Note that you must do this in-place without making a copy of the array.
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

const moveValsAtEnd = (nums, val = 0) => {
  let pointer = 0; // Pointer to the last non-zero element

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // Swap non-zero value with element at the pointer position
      [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
      pointer++;
    }
  }
};

let nums = [0, 1, 0, 3, 12];
moveValsAtEnd(nums);
console.log(nums);