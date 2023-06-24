/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
**Example 1:**
Input: nums = [1,2,3,1]
Output: true
*/

const checkDuplicate = (nums) => {
    visited = [];
    for (let i = 0; i < nums.length; i++) {
      if (visited.includes(nums[i])) {
        return true;
      } else {
        visited.push(nums[i]);
      }
    }
    return false;
  };
  
  const nums = [3,3];
  console.log(checkDuplicate(nums));