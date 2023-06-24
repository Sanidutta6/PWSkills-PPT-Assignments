/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
*/

const mergeArray = (nums1, nums2, m, n) => {
  let i = 0, j  = 0;
  while(i < (m+n) && j < n) {
    if((nums1[i] > nums2[j]) || (nums1[i] == 0)) {
        // insert
        nums1.splice(i, 0, nums2[j]);
        // shift
        nums1.splice(nums1.length-1, 1);
        j++;
    }
    i++;
  }
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
mergeArray(nums1, nums2, m, n)
console.log(nums1);