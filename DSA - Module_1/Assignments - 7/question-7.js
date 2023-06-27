/*
Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**

**Input:** s = "ab#c", t = "ad#c"

**Output:** true

**Explanation:**

Both s and t become "ac".
*/

const buildString = (str) => {
  const result = [];
  for (let char of str) {
    if (char !== "#") {
      result.push(char);
    } else {
      result.pop();
    }
  }
  return result.join("");
};

const BackspaceCompare = (s, t) => {
  const processedS = buildString(s);
  const processedT = buildString(t);
  return processedS === processedT;
};

const s = "ab#c", t = "ad#c";
console.log(BackspaceCompare(s, t));