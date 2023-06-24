/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true
*/

const isMonotonicArray = (nums) => {
    let isIncreasing = true, isDecreasing = true;

    for(let i = 1; i < nums.length;i++) {
        if(nums[i-1] > nums[i]) {
            isIncreasing = false
        }
        if(nums[i-1] < nums[i]) {
            isDecreasing = false
        }

        if(!isIncreasing && !isDecreasing) {
            break;
        }
    }

    return isIncreasing || isDecreasing;
}

const nums = [15, 25, 10, 18, 20, 30];
console.log(isMonotonicArray(nums));