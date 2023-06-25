/*
You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/

const IncrementByVal = (nums, val = 1) => {
  let carry = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i] = nums[i] + val + carry;
    carry = nums[i] > 9 ? Math.floor(nums[i] / 10) : 0;

    if (nums[i] > 9) {
      nums[i] = nums[i] % 10;
    } else if (carry == 0) {
      return nums;
    }
    val = 0;
  }
  const carrySplitedArray = Array.from(String(carry), Number);
  return [...carrySplitedArray, ...nums];
};

const digits = [9, 9];
console.log(IncrementByVal(digits));