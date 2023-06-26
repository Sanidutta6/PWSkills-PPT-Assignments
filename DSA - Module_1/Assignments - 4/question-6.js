/*
Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:**

Input: nums = [-4,-1,0,3,10]

Output: [0,1,9,16,100]

**Explanation:** After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]
*/

const sortedSquares = (nums) => {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare >= rightSquare) {
      result[i] = leftSquare;
      left++;
    } else {
      result[i] = rightSquare;
      right--;
    }
  }

  return result;
};

const nums = [-4,-1,0,3,10];
console.log(sortedSquares(nums));