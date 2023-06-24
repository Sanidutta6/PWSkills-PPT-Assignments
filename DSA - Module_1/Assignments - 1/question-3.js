/**
  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
  You must write an algorithm with O(log n) runtime complexity.
 */

const BinarySearch = (nums, val) => {
  // Non-recursive approach
  let low = 0, high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === val) {
      return mid;
    } else if (nums[mid] < val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

const nums = [1,3,5,6], target = 6;
console.log(BinarySearch(nums, target));