/*
Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example 1:**

**Input:** num = "69"

**Output:**

true
*/

const IsStrobogrammatic = (num) => {
  const strobogrammaticMap = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };

  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    const leftChar = num[left];
    const rightChar = num[right];

    if (
      !(
        leftChar in strobogrammaticMap &&
        strobogrammaticMap[leftChar] === rightChar
      )
    ) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

const num = "69";
console.log(IsStrobogrammatic(num));