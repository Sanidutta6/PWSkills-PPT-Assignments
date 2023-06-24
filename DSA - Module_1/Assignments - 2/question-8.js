/*
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
*/

const calcArrayScore = (nums, k) => {
    let max = Number.NEGATIVE_INFINITY, min = Number.POSITIVE_INFINITY;
    for(let num of nums) {
        const randomValInRangeK = Math.round((Math.random() * (2 * k)) - k)
        num = num + randomValInRangeK;
        if(num > max) {
            max = num;
        }
        if(num < min) {
            min = num;
        }
    }

    return (max - min);
}

const nums = [1], k = 0;
console.log(calcArrayScore(nums, k));