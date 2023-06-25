/**
 You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
    Increment the large integer by one and return the resulting array of digits.
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

const digits = [1, 2, 3];
console.log(IncrementByVal(digits));
