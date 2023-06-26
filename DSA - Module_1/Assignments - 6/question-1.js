/*
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

**Example 1:**

**Input:** s = "IDID"

**Output:**

[0,4,1,3,2]
*/

const GetArrayFromDI = (str) => {
  let perm = [],
    minVal = 0,
    maxVal = s.length;

  for (let i = 0; i < s.length; i++) {
    if (str[i] === "I") {
      perm.push(minVal);
      minVal++;
    } else if (str[i] === "D") {
      perm.push(maxVal);
      maxVal--;
    }
  }
  perm.push(minVal);

  return perm;
};

const s = "IDID";
console.log(GetArrayFromDI(s));