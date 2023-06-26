/*
Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

**Example 1:**
**Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

**Output:**

[[7,0,0],[-7,0,3]]
*/

function multiplySparseMatrices(mat1, mat2) {
  const m = mat1.length; // Number of rows in mat1
  const k = mat1[0].length; // Number of columns in mat1 (same as rows in mat2)
  const n = mat2[0].length; // Number of columns in mat2

  // Initialize the result matrix with zeros
  const result = Array.from({ length: m }, () => Array(n).fill(0));

  // Perform matrix multiplication
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let p = 0; p < k; p++) {
        result[i][j] += mat1[i][p] * mat2[p][j];
      }
    }
  }

  return result;
}

// Example usage:
const mat1 = [
  [1, 0, 0],
  [-1, 0, 3],
];
const mat2 = [
  [7, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];

const result = multiplySparseMatrices(mat1, mat2);
console.log(result);