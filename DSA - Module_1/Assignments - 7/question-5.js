/*
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

**Example 1:**

**Input:** s = "abcdefg", k = 2

**Output:**

"bacdfeg"
*/

const ReverseKCharsInEvery2KChats = (s, k) => {
  const chars = s.split("");
  let i = 0;

  while (i < chars.length) {
    // Reverse the first k characters
    let start = i;
    let end = Math.min(i + k - 1, chars.length - 1);
    while (start < end) {
      [chars[start], chars[end]] = [chars[end], chars[start]];
      start++;
      end--;
    }

    // Move to the next 2k characters
    i += 2 * k;
  }

  return chars.join("");
};

const s = "abcdefg",
  k = 2;
console.log(ReverseKCharsInEvery2KChats(s, k));
