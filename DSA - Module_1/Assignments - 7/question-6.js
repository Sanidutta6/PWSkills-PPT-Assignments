/*
Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

A **shift** on s consists of moving the leftmost character of s to the rightmost position.

- For example, if s = "abcde", then it will be "bcdea" after one shift.

**Example 1:**

**Input:** s = "abcde", goal = "cdeab"

**Output:**

true
*/

const rotateString = (s) => {
  return s.slice(1) + s[0];
};

const RotateStringEquals = (s, goal) => {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    s = rotateString(s);
    if (s === goal) {
      return true;
    }
  }

  return false;
};

const s = "abcde", goal = "cdeab";
console.log(RotateStringEquals(s, goal));