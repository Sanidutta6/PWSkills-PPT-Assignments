/*
An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

**Example 1:**

**Input:** changed = [1,3,4,2,6,8]

**Output:** [1,3,4]

**Explanation:** One possible original array could be [1,3,4]:

- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.

Other original arrays could be [4,3,1] or [3,1,4].
*/

const findOriginalArray = (changed) => {
  if (changed.length % 2 !== 0) {
    return [];
  }

  const countMap = new Map();
  changed.sort((a, b) => a - b);

  for (let num of changed) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  const originalArray = [];
  for (let num of changed) {
    if (countMap.get(num) === 0) {
      continue;
    }
    if (countMap.get(num * 2) === undefined || countMap.get(num * 2) === 0) {
      return [];
    }

    originalArray.push(num);
    countMap.set(num, countMap.get(num) - 1);
    countMap.set(num * 2, countMap.get(num * 2) - 1);
  }

  return originalArray;
};

const changed = [1,3,4,2,6,8];
console.log(findOriginalArray(changed));