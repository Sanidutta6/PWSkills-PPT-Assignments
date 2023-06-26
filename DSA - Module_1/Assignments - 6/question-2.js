/*
You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

You must write a solution in O(log(m * n)) time complexity.

**Example 1:**

**Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

**Output:** true
*/

const FindTargetFrom2DArray = (matrix, target) => {
  const rowLen = matrix.length,
    colLen = matrix[0].length;
  let low = 0,
    high = rowLen * colLen - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const j = mid % colLen;
    const i = Math.floor(mid / colLen);

    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
};

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;
console.log(FindTargetFrom2DArray(matrix, target));
