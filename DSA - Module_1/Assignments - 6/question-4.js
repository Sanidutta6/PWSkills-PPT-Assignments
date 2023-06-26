/*
Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

**Example 1:**

**Input:** nums = [0,1]

**Output:** 2

**Explanation:**

[0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
*/

var findMaxContiguousArrayLength = (nums) => {
  const map = new Map();
  map.set(0, -1);
  let count = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] === 0 ? count-- : count++;

    if (count === 0) {
      maxLen = Math.max(maxLen, i + 1);
    } else if (map.has(count)) {
      maxLen = Math.max(maxLen, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }

  return maxLen;
};

const nums = [0,1];
console.log(findMaxContiguousArrayLength(nums));